import {
  flushSync,
  useImperativeHandle,
  useReducer,
  useRef,
  type OctaneNode,
} from "octane";
import type { Octane, OctaneElement } from "octane/jsx-runtime";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_VIRTUAL_STATE,
  createVirtualStore,
  UPDATE_SCROLL_END_EVENT,
  UPDATE_SCROLL_EVENT,
  createWindowScroller,
  createWindowResizer,
  type CacheSnapshot,
  type ScrollToIndexOpts,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { getKey, refKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
import type {
  CustomContainerComponent,
  CustomItemComponent,
} from "./types.js";
import { ListItem } from "./ListItem.tsrx";
import { useChildren } from "./useChildren.js";

/** Methods of {@link WindowVirtualizer}. */
export interface WindowVirtualizerHandle {
  readonly cache: CacheSnapshot;
  readonly scrollOffset: number;
  readonly viewportSize: number;
  findItemIndex(offset: number): number;
  getItemOffset(index: number): number;
  getItemSize(index: number): number;
  scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
}

/** Props of {@link WindowVirtualizer}. */
export interface WindowVirtualizerProps<T = unknown> {
  children: OctaneNode | ((data: T, index: number) => OctaneElement);
  data?: ArrayLike<T>;
  bufferSize?: number;
  itemSize?: number;
  shift?: boolean;
  horizontal?: boolean;
  cache?: CacheSnapshot;
  ssrCount?: number;
  as?: keyof Octane.JSX.IntrinsicElements | CustomContainerComponent;
  item?: keyof Octane.JSX.IntrinsicElements | CustomItemComponent;
  onScroll?: () => void;
  onScrollEnd?: () => void;
  ref?:
    | { current: WindowVirtualizerHandle | null }
    | ((value: WindowVirtualizerHandle | null) => void);
}

/**
 * {@link Virtualizer} controlled by window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.
 */
export function WindowVirtualizer<T>({
  children,
  data,
  bufferSize,
  itemSize,
  shift,
  horizontal: horizontalProp,
  cache,
  ssrCount,
  as: Element = "div",
  item: ItemElement = "div",
  onScroll: onScrollProp,
  onScrollEnd: onScrollEndProp,
  ref,
}: WindowVirtualizerProps<T>): OctaneElement {
  Element = Element as "div";

  const [renderElement, count] = useChildren(children, data);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const onScroll = useLatestRef(onScrollProp);
  const onScrollEnd = useLatestRef(onScrollEndProp);
  const isSSR = useRef(!!ssrCount);

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
      createWindowResizer(virtualStore, horizontal),
      createWindowScroller(virtualStore, horizontal),
      horizontal,
    ] as const;
  });

  if (count !== store.$getItemsLength()) {
    store.$update(ACTION_ITEMS_LENGTH_CHANGE, [count, shift]);
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
      onScroll[refKey]?.();
    });
    store.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
      onScrollEnd[refKey]?.();
    });

    const element = containerRef[refKey]!;
    resizer.$observeRoot(element);
    scroller.$observe(element);
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
      get viewportSize() {
        return store.$getViewportSize();
      },
      findItemIndex: store.$findItemIndex,
      getItemOffset: store.$getItemOffset,
      getItemSize: store.$getItemSize,
      scrollToIndex: scroller.$scrollToIndex,
    }),
    [],
  );

  for (let [start, end] = store.$getRange(bufferSize); start <= end; start++) {
    const element = renderElement(start);
    items.push(
      <ListItem
        key={getKey(element, start)}
        _resizer={resizer.$observeItem}
        _index={start}
        _offset={store.$getItemOffset(start, isNegative)}
        _hide={store.$isUnmeasuredItem(start)}
        _as={ItemElement as "div"}
        _children={element}
        _isHorizontal={isHorizontal}
        _isSSR={isSSR[refKey]}
      />,
    );
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
