import {
  JSX,
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useReducer,
} from "react";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  createVirtualStore,
  getScrollSize,
  UPDATE_VIRTUAL_STATE,
  createGridScroller,
  createGridResizer,
  GridResizer,
  isRTLDocument,
  UPDATE_SCROLL_EVENT,
  UPDATE_SCROLL_END_EVENT,
} from "../core";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { refKey } from "./utils";
import { useStatic } from "./useStatic";
import { ViewportComponentAttributes } from "./types";
import { useLatestRef } from "./useLatestRef";
import { flushSync } from "react-dom";

const genKey = (i: number, j: number) => `${i}-${j}`;

/**
 * Props of customized cell component for {@link VGrid}.
 */
export interface CustomCellComponentProps {
  style: CSSProperties;
  children: ReactNode;
}

export type CustomCellComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>
>;

interface CellProps {
  _children: ReactNode;
  _resizer: GridResizer;
  _rowIndex: number;
  _colIndex: number;
  _top: number;
  _left: number;
  _height: number;
  _width: number;
  _hide: boolean;
  _element: "div";
}

const Cell = memo(
  ({
    _children: children,
    _resizer: resizer,
    _rowIndex: rowIndex,
    _colIndex: colIndex,
    _top: top,
    _left: left,
    _height: height,
    _width: width,
    _hide: hide,
    _element: Element,
  }: CellProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(
      () => resizer.$observeItem(ref[refKey]!, rowIndex, colIndex),
      [colIndex, rowIndex]
    );

    return (
      <Element
        ref={ref}
        style={useMemo((): CSSProperties => {
          const style: CSSProperties = {
            display: "grid",
            position: "absolute",
            top: top,
            [isRTLDocument() ? "right" : "left"]: left,
            visibility: hide ? "hidden" : "visible",
            minHeight: height,
            minWidth: width,
          };
          return style;
        }, [top, left, width, height, hide])}
      >
        {children}
      </Element>
    );
  }
);

/**
 * Methods of {@link VGrid}.
 */
export interface VGridHandle {
  /**
   * Get current scrollTop.
   */
  readonly scrollTop: number;
  /**
   * Get current scrollLeft.
   */
  readonly scrollLeft: number;
  /**
   * Get current scrollHeight.
   */
  readonly scrollHeight: number;
  /**
   * Get current scrollWidth.
   */
  readonly scrollWidth: number;
  /**
   * Get current offsetHeight.
   */
  readonly viewportHeight: number;
  /**
   * Get current offsetWidth.
   */
  readonly viewportWidth: number;
  /**
   * Find the start index of visible range of items.
   */
  findStartIndex: () => [x: number, y: number];
  /**
   * Find the end index of visible range of items.
   */
  findEndIndex: () => [x: number, y: number];
  /**
   * Get item offset from start.
   * @param indexX horizontal index of item
   * @param indexY vertical of item
   */
  getItemOffset(indexX: number, indexY: number): [x: number, y: number];
  /**
   * Get item size.
   * @param indexX horizontal index of item
   * @param indexY vertical of item
   */
  getItemSize(indexX: number, indexY: number): [width: number, height: number];
  /**
   * Scroll to the item specified by index.
   * @param indexX horizontal index of item
   * @param indexY vertical index of item
   */
  scrollToIndex(indexX: number, indexY: number): void;
  /**
   * Scroll to the given offset.
   * @param offsetX offset from left
   * @param offsetY offset from top
   */
  scrollTo(offsetX: number, offsetY: number): void;
  /**
   * Scroll by the given offset.
   * @param offsetX horizontal offset from current position
   * @param offsetY vertical offset from current position
   */
  scrollBy(offsetX: number, offsetY: number): void;
}

/**
 * Props of {@link VGrid}.
 */
export interface VGridProps extends ViewportComponentAttributes {
  /**
   * A function to create elements rendered by this component.
   */
  children: (arg: {
    /**
     * row index of cell
     */
    rowIndex: number;
    /**
     * column index of cell
     */
    colIndex: number;
  }) => ReactNode;
  /**
   * Total row length of grid.
   */
  row: number;
  /**
   * Total column length of grid.
   */
  col: number;
  /**
   * Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
   * @defaultValue 40
   */
  cellHeight?: number;
  /**
   * Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
   * @defaultValue 100
   */
  cellWidth?: number;
  /**
   * Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 2
   */
  overscan?: number;
  /**
   * If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
   */
  initialRowCount?: number;
  /**
   * If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
   */
  initialColCount?: number;
  /**
   * Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
   * @defaultValue "div"
   */
  item?: keyof JSX.IntrinsicElements | CustomCellComponent;
  /**
   * Callback invoked whenever scroll offset changes.
   */
  onScroll?: (offset: number) => void;
  /**
   * Callback invoked when scrolling stops.
   */
  onScrollEnd?: () => void;
}

/**
 * Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.
 */
export const VGrid = forwardRef<VGridHandle, VGridProps>(
  (
    {
      children,
      row: rowCount,
      col: colCount,
      cellHeight = 40,
      cellWidth = 100,
      overscan = 2,
      initialRowCount,
      initialColCount,
      item: ItemElement = "div",
      onScroll: onScrollProp,
      onScrollEnd: onScrollEndProp,
      style,
      ...attrs
    },
    ref
  ): ReactElement => {
    const [vStore, hStore, resizer, scroller] = useStatic(() => {
      const _vs = createVirtualStore(
        rowCount,
        cellHeight,
        overscan,
        initialRowCount
      );
      const _hs = createVirtualStore(
        colCount,
        cellWidth,
        overscan,
        initialColCount
      );
      return [
        _vs,
        _hs,
        createGridResizer(_vs, _hs),
        createGridScroller(_vs, _hs),
      ];
    });
    // The elements length and cached items length are different just after element is added/removed.
    vStore.$update(ACTION_ITEMS_LENGTH_CHANGE, [rowCount]);
    hStore.$update(ACTION_ITEMS_LENGTH_CHANGE, [colCount]);

    const [vStateVersion, vRerender] = useReducer(
      vStore.$getStateVersion,
      undefined,
      vStore.$getStateVersion
    );
    const [hStateVersion, hRerender] = useReducer(
      hStore.$getStateVersion,
      undefined,
      hStore.$getStateVersion
    );

    const [startRowIndex, endRowIndex] = vStore.$getRange();
    const [startColIndex, endColIndex] = hStore.$getRange();
    const vIsScrolling = vStore.$isScrolling();
    const hIsScrolling = hStore.$isScrolling();
    const height = getScrollSize(vStore);
    const width = getScrollSize(hStore);
    const rootRef = useRef<HTMLDivElement>(null);
    const onScroll = useLatestRef(onScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      // store must be subscribed first because others may dispatch update on init depending on implementation
      const unsubscribeVStore = vStore.$subscribe(
        UPDATE_VIRTUAL_STATE,
        (sync) => {
          if (sync) {
            flushSync(vRerender);
          } else {
            vRerender();
          }
        }
      );
      const unsubscribeHStore = hStore.$subscribe(
        UPDATE_VIRTUAL_STATE,
        (sync) => {
          if (sync) {
            flushSync(hRerender);
          } else {
            hRerender();
          }
        }
      );
      const unsubscribeVScroll = vStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
        onScroll[refKey] && onScroll[refKey](vStore.$getScrollOffset())
      })
      const unsubscribeVScrollEnd = vStore.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
        onScrollEnd[refKey] && onScrollEnd[refKey]()
      })

      resizer.$observeRoot(root);
      scroller.$observe(root);
      return () => {
        unsubscribeVStore();
        unsubscribeHStore();
        resizer.$dispose();
        scroller.$dispose();
        unsubscribeVScroll();
        unsubscribeVScrollEnd();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      scroller.$fixScrollJump();
    }, [vStateVersion, hStateVersion]);

    useImperativeHandle(ref, () => {
      return {
        get scrollTop() {
          return vStore.$getScrollOffset();
        },
        get scrollLeft() {
          return hStore.$getScrollOffset();
        },
        get scrollHeight() {
          return getScrollSize(vStore);
        },
        get scrollWidth() {
          return getScrollSize(hStore);
        },
        get viewportHeight() {
          return vStore.$getViewportSize();
        },
        get viewportWidth() {
          return hStore.$getViewportSize();
        },
        findStartIndex: () => [hStore.$findStartIndex(), vStore.$findStartIndex()],
        findEndIndex: () => [hStore.$findEndIndex(), vStore.$findEndIndex()],
        getItemOffset: (indexX, indexY) => [hStore.$getItemOffset(indexX), vStore.$getItemOffset(indexY)],
        getItemSize: (indexX, indexY) => [hStore.$getItemSize(indexX), vStore.$getItemSize(indexY)],
        scrollToIndex: scroller.$scrollToIndex,
        scrollTo: scroller.$scrollTo,
        scrollBy: scroller.$scrollBy,
      };
    }, []);

    const render = useMemo(() => {
      const cache = new Map<string, ReactNode>();
      return (rowIndex: number, colIndex: number) => {
        let e: ReactNode | undefined = cache.get(genKey(rowIndex, colIndex));
        if (!e) {
          cache.set(
            genKey(rowIndex, colIndex),
            (e = children({ rowIndex, colIndex }))
          );
        }
        return e;
      };
    }, [children]);

    const items: ReactElement[] = [];
    for (let rowIndex = startRowIndex; rowIndex <= endRowIndex; rowIndex++) {
      for (let colIndex = startColIndex; colIndex <= endColIndex; colIndex++) {
        items.push(
          <Cell
            key={genKey(rowIndex, colIndex)}
            _resizer={resizer}
            _rowIndex={rowIndex}
            _colIndex={colIndex}
            _top={vStore.$getItemOffset(rowIndex)}
            _left={hStore.$getItemOffset(colIndex)}
            _height={vStore.$getItemSize(rowIndex)}
            _width={hStore.$getItemSize(colIndex)}
            _hide={
              vStore.$isUnmeasuredItem(rowIndex) ||
              hStore.$isUnmeasuredItem(colIndex)
            }
            _element={ItemElement as "div"}
            _children={render(rowIndex, colIndex)}
          />
        );
      }
    }

    return (
      <div
        ref={rootRef}
        {...attrs}
        style={{
          overflow: "auto",
          contain: "strict",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <div
          style={{
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
            flex: "none", // flex style can break layout
            position: "relative",
            visibility: "hidden", // TODO replace with other optimization methods
            width: width,
            height: height,
            pointerEvents: vIsScrolling || hIsScrolling ? "none" : undefined,
          }}
        >
          {items}
        </div>
      </div>
    );
  }
);
