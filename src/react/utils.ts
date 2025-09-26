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

export class IndexedCache<T> {
  #cache: T[];
  #cachedIndicesOrder: CircularUniqueQueue<number> | undefined;

  constructor(length: number, cacheLimit: number | undefined) {
    // Using a sparse array instead of a Map enables faster cleanup of a specific
    // range. A sparse array also uses a hash map internally, it doesn't allocate
    // slots for all elements, so we can take advantage of the performance
    // benefits of both an array and a hash map.
    this.#cache = new Array<T>(length);

    // Using a circular queue for indices order enables deletion of the oldest
    // value when threshold is reached, to not exceed the limit, but yet keep
    // the most recent values in the cache.
    if (cacheLimit && cacheLimit < length) {
      this.#cachedIndicesOrder = new CircularUniqueQueue<number>(cacheLimit);
    }
  }

  get(i: number) {
    return this.#cache[i];
  }

  set(i: number, value: T) {
    if (this.#cachedIndicesOrder && this.#cache[i] === undefined) {
      const cacheIndexToRemove = this.#cachedIndicesOrder.enqueue(i);
      if (cacheIndexToRemove !== undefined) {
        delete this.#cache[cacheIndexToRemove];
      }
    }

    this.#cache[i] = value;
  }

  clearRange(
    startIndex: number | undefined = 0,
    endIndex: number | undefined = this.#cache.length
  ) {
    const deletedIndices = this.#cachedIndicesOrder && new Set<number>();

    for (const indexStr in this.#cache) {
      const index = Number(indexStr);
      if (index >= startIndex || index < endIndex) {
        delete this.#cache[index];

        if (deletedIndices) {
          deletedIndices.add(index);
        }
      }

      if (index >= endIndex) {
        break;
      }
    }

    if (deletedIndices && this.#cachedIndicesOrder) {
      this.#cachedIndicesOrder.filter((i) => deletedIndices.has(i));
    }
  }
}

class CircularUniqueQueue<T> {
  #data: (T | undefined)[];
  #head = 0;
  #tail = 0;
  #size = 0;
  #capacity: number;
  #set: Set<T>;

  constructor(capacity: number) {
    this.#data = new Array<T>(capacity);
    this.#capacity = capacity;
    this.#set = new Set<T>();
  }

  enqueue(item: T) {
    if (this.#set.has(item)) return undefined;
    const dequeuedItem =
      this.#size === this.#capacity ? this.dequeue() : undefined;

    this.#data[this.#tail] = item;
    this.#set.add(item);
    this.#tail = (this.#tail + 1) % this.#capacity;
    this.#size++;
    return dequeuedItem;
  }

  dequeue() {
    if (this.#size === 0) return undefined;
    const item = this.#data[this.#head];
    if (item !== undefined) this.#set.delete(item);

    this.#data[this.#head] = undefined;
    this.#head = (this.#head + 1) % this.#capacity;
    this.#size--;
    return item;
  }

  filter(predicate: (item: T) => boolean) {
    for (let i = 0; i < this.#size; i++) {
      const item = this.dequeue();
      if (item !== undefined && predicate(item)) {
        this.enqueue(item);
      }
    }
  }
}
