import {
  flushSync,
  useImperativeHandle,
  useReducer,
  useRef,
  type OctaneNode,
} from "octane";
import type { Octane, OctaneElement } from "octane/jsx-runtime";
import {
  UPDATE_SCROLL_EVENT,
  ACTION_ITEMS_LENGTH_CHANGE,
  createVirtualStore,
  UPDATE_VIRTUAL_STATE,
  UPDATE_SCROLL_END_EVENT,
  getScrollSize,
  ACTION_START_OFFSET_CHANGE,
  createScroller,
  createResizer,
  type CacheSnapshot,
  type ScrollToIndexOpts,
  microtask,
  sort,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { getKey, refKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
import { ListItem } from "./ListItem.tsrx";
import { useChildren } from "./useChildren.js";
import type {
  CustomContainerComponent,
  CustomItemComponent,
} from "./types.js";

/** Methods of {@link Virtualizer}. */
export interface VirtualizerHandle {
  readonly cache: CacheSnapshot;
  readonly scrollOffset: number;
  readonly scrollSize: number;
  readonly viewportSize: number;
  findItemIndex(offset: number): number;
  getItemOffset(index: number): number;
  getItemSize(index: number): number;
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
  scrollTo(offset: number): void;
  scrollBy(offset: number): void;
}

/** Props of {@link Virtualizer}. */
export interface VirtualizerProps<T = unknown> {
  children: OctaneNode | ((data: T, index: number) => OctaneElement);
  data?: ArrayLike<T>;
  bufferSize?: number;
  itemSize?: number;
  shift?: boolean;
  horizontal?: boolean;
  keepMounted?: readonly number[];
  cache?: CacheSnapshot;
  startMargin?: number;
  ssrCount?: number;
  as?: keyof Octane.JSX.IntrinsicElements | CustomContainerComponent;
  item?: keyof Octane.JSX.IntrinsicElements | CustomItemComponent;
  scrollRef?: { current: HTMLElement | null };
  onScroll?: (offset: number) => void;
  onScrollEnd?: () => void;
  ref?:
    | { current: VirtualizerHandle | null }
    | ((value: VirtualizerHandle | null) => void);
}

/**
 * Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.
 */
export function Virtualizer<T>({
  children,
  data,
  bufferSize,
  itemSize,
  shift,
  horizontal: horizontalProp,
  keepMounted,
  cache,
  startMargin = 0,
  ssrCount,
  as: Element = "div",
  item: ItemElement = "div",
  scrollRef,
  onScroll: onScrollProp,
  onScrollEnd: onScrollEndProp,
  ref,
}: VirtualizerProps<T>): OctaneElement {
  Element = Element as "div";

  const [renderElement, count] = useChildren(children, data);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isSSR = useRef(!!ssrCount);
  const onScroll = useLatestRef(onScrollProp);
  const onScrollEnd = useLatestRef(onScrollEndProp);

  const [store, resizer, scroller, isHorizontal] = useStatic(() => {
    const horizontal = !!horizontalProp;
    const virtualStore = createVirtualStore(
      count,
      itemSize,
      ssrCount,
      cache,
      !itemSize,
    );
    return [
      virtualStore,
      createResizer(virtualStore, horizontal),
      createScroller(virtualStore, horizontal),
      horizontal,
    ] as const;
  });

  // The element and cache lengths briefly differ when items are inserted or removed.
  if (count !== store.$getItemsLength()) {
    store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
  }
  if (startMargin !== store.$getStartSpacerSize()) {
    store.$update(ACTION_START_OFFSET_CHANGE, startMargin);
  }

  const [stateVersion, rerender] = useReducer(
    store.$getStateVersion,
    undefined,
    store.$getStateVersion,
  );
  const isScrolling = store.$isScrolling();
  const totalSize = store.$getTotalSize();
  const isNegative = scroller.$isNegative();
  const items: OctaneElement[] = [];

  const renderItem = (index: number) => {
    const element = renderElement(index);
    return (
      <ListItem
        key={getKey(element, index)}
        _resizer={resizer.$observeItem}
        _index={index}
        _offset={store.$getItemOffset(index, isNegative)}
        _hide={store.$isUnmeasuredItem(index)}
        _as={ItemElement as "div"}
        _children={element}
        _isHorizontal={isHorizontal}
        _isSSR={isSSR[refKey]}
      />
    );
  };

  useIsomorphicLayoutEffect(() => {
    isSSR[refKey] = false;

    // Reason: the store must observe first because resizer/scroller setup may dispatch.
    store.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
      if (sync) {
        flushSync(() => rerender(undefined));
      } else {
        rerender(undefined);
      }
    });
    store.$subscribe(UPDATE_SCROLL_EVENT, () => {
      onScroll[refKey]?.(store.$getScrollOffset());
    });
    store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
      onScrollEnd[refKey]?.();
    });

    const container = containerRef[refKey]!;
    const assignScrollableElement = (element: HTMLElement) => {
      resizer.$observeRoot(element);
      scroller.$observe(container, element);
    };
    if (scrollRef) {
      // The parent's ref does not exist yet when this layout effect begins.
      microtask(() => {
        if (scrollRef[refKey]) {
          assignScrollableElement(scrollRef[refKey]);
        }
      });
    } else {
      assignScrollableElement(container.parentElement!);
    }

    return () => {
      store.$dispose();
      resizer.$dispose();
      scroller.$dispose();
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    scroller.$fixScrollJump();
  }, [stateVersion]);

  useImperativeHandle(
    ref,
    () => ({
      get cache() {
        return store.$getCacheSnapshot();
      },
      get scrollOffset() {
        return store.$getScrollOffset();
      },
      get scrollSize() {
        return getScrollSize(store);
      },
      get viewportSize() {
        return store.$getViewportSize();
      },
      findItemIndex: store.$findItemIndex,
      getItemOffset: store.$getItemOffset,
      getItemSize: store.$getItemSize,
      scrollToIndex: scroller.$scrollToIndex,
      scrollTo: scroller.$scrollTo,
      scrollBy: scroller.$scrollBy,
    }),
    [],
  );

  if (keepMounted) {
    const mounted = new Set(keepMounted);
    for (let [start, end] = store.$getRange(bufferSize); start <= end; start++) {
      mounted.add(start);
    }
    for (const index of sort([...mounted])) {
      items.push(renderItem(index));
    }
  } else {
    for (let [start, end] = store.$getRange(bufferSize); start <= end; start++) {
      items.push(renderItem(start));
    }
  }

  return (
    <Element
      ref={containerRef}
      style={{
        contain: "size style",
        overflowAnchor: "none",
        flex: "none",
        position: "relative",
        width: isHorizontal ? totalSize : "100%",
        height: isHorizontal ? "100%" : totalSize,
        pointerEvents: isScrolling ? "none" : undefined,
      }}
    >
      {items}
    </Element>
  );
}
