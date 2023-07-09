import {
  Children,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  RefObject,
  useState,
  ReactFragment,
} from "react";
import { VirtualStore, createVirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useStore } from "./useStore";
import { exists, max, min } from "../core/utils";
import { createWindowScroller } from "../core/scroller";
import { isInvalidElement, refKey } from "./utils";
import { useStatic } from "./useStatic";
import { useRefWithUpdate } from "./useRefWithUpdate";
import { createWindowResizer } from "../core/resizer";
import { WindowComponentAttributes } from "..";
import {
  CustomWindowComponent,
  CustomWindowComponentProps,
  DefaultWindow,
} from "./DefaultWindow";
import { ListItem } from "./ListItem";

export type ScrollMode = "reverse" | "rtl";

const Window = ({
  _children: children,
  _ref: ref,
  _store: store,
  _element: Element,
  _scrolling: scrolling,
  _attrs: attrs,
  _isHorizontal: horizontal,
}: {
  _children: ReactNode;
  _ref: RefObject<HTMLDivElement>;
  _store: VirtualStore;
  _element: CustomWindowComponent;
  _scrolling: boolean;
  _attrs: WindowComponentAttributes;
  _isHorizontal: boolean;
}) => {
  const scrollSize = useStore(store, store._getCorrectedScrollSize);

  return (
    <Element
      ref={ref}
      width={horizontal ? scrollSize : undefined}
      height={horizontal ? undefined : scrollSize}
      scrolling={scrolling}
      attrs={useMemo(
        () => ({
          ...attrs,
          style: {
            overflow: "visible",
            display: horizontal ? "inline-block" : "block",
            // transform: "translate3d(0px, 0px, 0px)",
            // willChange: "scroll-position",
            // backfaceVisibility: "hidden",
            // https://github.com/bvaughn/react-window/issues/395
            // willChange: "transform",
            width: horizontal ? "auto" : "100%",
            height: horizontal ? "100%" : "auto",
            padding: 0,
            margin: 0,
            ...attrs.style,
          },
        }),
        [attrs]
      )}
    >
      {children}
    </Element>
  );
};

/**
 * Props of customized item component for {@link VList}.
 */
export interface CustomItemComponentProps {
  style: CSSProperties;
  children: ReactNode;
}

export type CustomItemComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>
>;

type CustomItemComponentOrElement =
  | keyof JSX.IntrinsicElements
  | CustomItemComponent;

/**
 * Props of {@link VWindow}.
 */
export interface VWindowProps extends WindowComponentAttributes {
  /**
   * Elements rendered by this component.
   */
  children: ReactNode;
  /**
   * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 4
   */
  overscan?: number;
  /**
   * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
   *
   * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
   * - If set, you can opt out estimation and use the value as initial item size.
   */
  initialItemSize?: number;
  /**
   * If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
   */
  initialItemCount?: number;
  /**
   * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
   */
  horizontal?: boolean;
  /**
   * Scroll modes that should be set in certain situations.
   *
   * - `reverse`: This mode will Adjust some styles to be suitable for bottom-to-top scrolling.
   * - `rtl`: You have to set this mode if you use this component under `direction: rtl` style.
   */
  mode?: ScrollMode;
  /**
   * Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
   * @defaultValue {@link DefaultWindow}
   */
  element?: CustomWindowComponent;
  /**
   * Customized element type for item element. This element will get {@link CustomItemComponentProps} as props.
   * @defaultValue "div"
   */
  itemElement?: CustomItemComponentOrElement;
  /**
   * Callback invoked whenever scroll offset changes.
   * @param offset Current scrollTop or scrollLeft.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollStop?: () => void;
  /**
   * Callback invoked when visible items range changes.
   */
  onRangeChange?: (payload: {
    /**
     * The start index of viewable items.
     */
    start: number;
    /**
     * The end index of viewable items.
     */
    end: number;
    /**
     * The total count of items.
     */
    count: number;
  }) => void;
}

/**
 * Virtualized list component to be scrolled based on the window's scroll positions. See {@link VWindowProps}.
 */
export const VWindow = ({
  children,
  overscan = 4,
  initialItemSize,
  initialItemCount,
  horizontal: horizontalProp,
  mode,
  element = DefaultWindow,
  itemElement = "div",
  onScroll: onScrollProp,
  onScrollStop: onScrollStopProp,
  onRangeChange: onRangeChangeProp,
  ...windowAttrs
}: VWindowProps): ReactElement => {
  // Memoize element array
  const elements = useMemo(() => {
    const arr: (ReactElement | ReactFragment | string | number)[] = [];
    Children.forEach(children, (e) => {
      if (isInvalidElement(e)) {
        return;
      }
      arr.push(e);
    });
    return arr;
  }, [children]);
  const count = elements.length;

  const onScroll = useRefWithUpdate(onScrollProp);
  const onScrollStop = useRefWithUpdate(onScrollStopProp);

  const [scrolling, setScrolling] = useState(false);
  const [store, resizer, scroller, isHorizontal, isRtl] = useStatic(() => {
    const _isHorizontal = !!horizontalProp;
    const _isRtl = mode === "rtl";
    const _store = createVirtualStore(
      count,
      initialItemSize,
      initialItemCount,
      mode === "reverse",
      (isScrolling) => {
        setScrolling(isScrolling);
        if (!isScrolling) {
          onScrollStop[refKey] && onScrollStop[refKey]();
        }
      },
      (offset) => {
        onScroll[refKey] && onScroll[refKey](offset);
      }
    );

    return [
      _store,
      createWindowResizer(_store, _isHorizontal),
      createWindowScroller(_store, _isHorizontal),
      _isHorizontal,
      _isRtl,
    ];
  });
  // The elements length and cached items length are different just after element is added/removed.
  store._updateCacheLength(count);

  const [startIndex, endIndex] = useStore(store, store._getRange);
  const jumpCount = useStore(store, store._getJumpCount);
  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef[refKey]!;
    const unobserve = resizer._observeRoot(root);
    const cleanup = scroller._initRoot(root);
    return () => {
      unobserve();
      cleanup();
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    const jump = store._flushJump();
    if (!jump) return;

    scroller._fixScrollJump(jump);
  }, [jumpCount]);

  useEffect(() => {
    if (!onRangeChangeProp) return;

    onRangeChangeProp({
      start: startIndex,
      end: endIndex,
      count,
    });
  }, [startIndex, endIndex]);

  const startIndexWithMargin = max(startIndex - overscan, 0);
  const endIndexWithMargin = min(endIndex + overscan, count - 1);
  const items = useMemo(() => {
    const res: ReactElement[] = [];
    for (let i = startIndexWithMargin; i <= endIndexWithMargin; i++) {
      const e = elements[i];
      // This can be undefined when items are removed
      if (exists(e)) {
        res.push(
          <ListItem
            key={(e as { key?: ReactElement["key"] })?.key || i}
            _resizer={resizer}
            _store={store}
            _index={i}
            _element={itemElement as "div"}
            _children={e}
            _isHorizontal={isHorizontal}
            _isRtl={isRtl}
          />
        );
      }
    }
    return res;
  }, [elements, startIndexWithMargin, endIndexWithMargin]);

  return (
    <Window
      _ref={rootRef}
      _store={store}
      _element={element}
      _scrolling={scrolling}
      _children={items}
      _attrs={windowAttrs}
      _isHorizontal={isHorizontal}
    />
  );
};
