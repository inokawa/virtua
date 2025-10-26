import { ReactNode } from "react";

/**
 * @internal
 */
export const refKey = "current";

/**
 * @internal
 */
export type ItemElement = Exclude<ReactNode, null | boolean | Array<any>>;

const forEach = (children: ReactNode, elements: ItemElement[]) => {
  if (Array.isArray(children)) {
    for (const c of children) {
      forEach(c, elements);
    }
  } else if (children == null || typeof children === "boolean") {
    // filter out, that is the same as React.Children.toArray
  } else {
    elements.push(children);
  }
};

/**
 * Replace React.Children.forEach with our tiny implementation.
 * In our usage, just flatten children array keeping element instances and their keys, React.Children is redundant and slow.
 *
 * - React.Children.toArray is slow because it clones element instance.
 * - React.Children.map is slow because it clones element instance.
 * - React.Children.forEach is slow because it escapes and modifies keys even if they are unused.
 *
 * And React.Children seems to be in maintenance mode so it's unlikely it would be improved and ported to older versions.
 * https://github.com/reactjs/rfcs/pull/61#issuecomment-584402735
 *
 * @internal
 */
export const flattenChildren = (children: ReactNode): ItemElement[] => {
  const elements: ItemElement[] = [];
  forEach(children, elements);
  return elements;
};

type MayHaveKey = { key?: React.Key };

/**
 * @internal
 */
export const getKey = (e: ItemElement, i: number): React.Key => {
  const key = (e as MayHaveKey).key;
  return key != null ? key : "_" + i;
};

const clamp = (value: number, minValue: number, maxValue: number): number =>
  Math.min(maxValue, Math.max(minValue, value));

/**
 * A cache implementation that stores values indexed by number, with optional LRU (Least Recently Used) eviction.
 *
 * - Uses a sparse array for efficient range cleanup and memory usage.
 * - Optionally limits the number of cached items using a numerical LRU queue.
 * - Provides methods to get, set, and clear cached values by index or range.
 */
export class IndexedCache<T> {
  #cache: T[];
  #cachedIndicesOrder: NumericalLruQueue | undefined;

  constructor(length: number, cacheLimit: number | undefined | null) {
    // Using a sparse array instead of a Map enables faster cleanup of a specific
    // range. A sparse array also uses a hash map internally, it doesn't allocate
    // slots for all elements, so we can take advantage of the performance
    // benefits of both an array and a hash map.
    this.#cache = new Array<T>(length);

    // Using a LRU queue for indices order enables deletion of the oldest
    // value when threshold is reached, to not exceed the limit, but yet keep
    // the most recent values in the cache.
    if (cacheLimit && cacheLimit < length) {
      this.#cachedIndicesOrder = new NumericalLruQueue(length, cacheLimit);
    }
  }

  get(i: number) {
    return this.#cache[i];
  }

  set(i: number, value: T) {
    if (this.#cachedIndicesOrder && this.#cache[i] === undefined) {
      const cacheIndexToRemove = this.#cachedIndicesOrder.enqueue(i);
      if (cacheIndexToRemove !== null) {
        delete this.#cache[cacheIndexToRemove];
      }
    }

    this.#cache[i] = value;
  }

  clearRange(
    startIndex: number | undefined = 0,
    endIndex: number | undefined = this.#cache.length - 1
  ) {
    startIndex = clamp(startIndex, 0, this.#cache.length - 1);
    endIndex = clamp(endIndex, 0, this.#cache.length - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      delete this.#cache[i];
    }

    this.#cachedIndicesOrder?.clearRange(startIndex, endIndex);
  }
}

/**
 * A numerical Least Recently Used (LRU) queue optimized for integer keys in the range [0, maxValue).
 *
 * This class maintains a fixed-capacity LRU queue using efficient array-based doubly-linked lists,
 * allowing for fast O(1) operations for insertion, access, and removal. It is designed for scenarios
 * where the set of possible keys is known and bounded, such as managing resources or cache entries
 * indexed by small integers.
 *
 * @example
 * ```typescript
 * const lru = new NumericalLruQueue(100, 10); // maxValue = 100, capacity = 10
 * lru.enqueue(7); // Access or insert 7, evict if over capacity
 * lru.dequeue(); // Remove and return the least recently used element
 * lru.clearRange(0, 9); // Remove all elements in the range [0, 9]
 * ```
 *
 * @remarks
 * - Keys must be integers in the range [0, maxValue).
 * - Not thread-safe.
 *
 * @public
 */
class NumericalLruQueue {
  readonly #capacity: number;
  readonly #maxValue: number;

  // Doubly-linked list arrays (store indices into 0..maxValue-1)
  #next: Int32Array; // length = maxValue
  #prev: Int32Array; // length = maxValue

  // Tracks whether element is in the LRU (and if so, points to itself)
  // -1 means "not present"
  #position: Int32Array; // length = maxValue

  #head: number; // LRU oldest
  #tail: number; // LRU newest
  #size: number;

  constructor(maxValue: number, capacity: number) {
    this.#maxValue = maxValue;
    this.#capacity = capacity;

    this.#next = new Int32Array(maxValue);
    this.#prev = new Int32Array(maxValue);
    this.#position = new Int32Array(maxValue);

    this.#position.fill(-1);

    this.#head = -1;
    this.#tail = -1;
    this.#size = 0;
  }

  /**
   * Adds the item at the specified index to the queue and manages the queue size.
   * If adding the item causes the queue to exceed its capacity, the oldest item is dequeued and its value is returned.
   * Otherwise, returns `null`.
   */
  enqueue(i: number): number | null {
    if (i < 0 || i >= this.#maxValue) return null;

    this.#access(i);
    if (this.#size > this.#capacity) {
      return this.dequeue();
    }
    return null;
  }

  /** Evicts the least used item. If the queue is empty, returns null. */
  dequeue(): number | null {
    if (this.#head === -1) return null;
    const victim = this.#head;
    this.#detach(victim);
    return victim;
  }

  /** Efficiently finds and detaches all items within the desired range. */
  clearRange(startIndex: number, endIndex: number): void {
    startIndex = clamp(startIndex, 0, this.#maxValue - 1);
    endIndex = clamp(endIndex, 0, this.#maxValue - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      if (this.#position[i] !== -1) {
        this.#detach(i);
      }
    }
  }

  #access(i: number): void {
    if (this.#position[i] === -1) {
      this.#insertAtTail(i);
    } else {
      this.#detach(i);
      this.#append(i);
    }
  }

  #insertAtTail(i: number): void {
    this.#append(i);
    this.#size++;
    this.#position[i] = i;
  }

  #append(i: number): void {
    this.#prev[i] = this.#tail;
    this.#next[i] = -1;
    if (this.#tail !== -1) this.#next[this.#tail] = i;
    this.#tail = i;
    if (this.#head === -1) this.#head = i;
    this.#position[i] = i;
  }

  #detach(i: number): void {
    const p = this.#prev[i]!;
    const n = this.#next[i]!;

    if (p !== -1) this.#next[p] = n;
    if (n !== -1) this.#prev[n] = p;

    if (this.#head === i) this.#head = n;
    if (this.#tail === i) this.#tail = p;

    this.#prev[i] = -1;
    this.#next[i] = -1;
    this.#position[i] = -1;

    this.#size--;
  }
}
