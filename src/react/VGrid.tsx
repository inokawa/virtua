import React, {
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
  Ref,
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
  initCache,
} from "../core/index.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { refKey } from "./utils.js";
import { useStatic } from "./useStatic.js";
import { ViewportComponentAttributes } from "./types.js";
import { useLatestRef } from "./useLatestRef.js";
import { flushSync } from "react-dom";
import { useMergeRefs } from "./useMergeRefs.js";

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
            contain: "layout style",
            display: "grid",
            position: "absolute",
            top: top,
            [isRTLDocument() ? "right" : "left"]: left,
            visibility: hide ? "hidden" : undefined,
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

export type VGridItemResize = readonly [index: number, size: number];

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
   * Resize individual columns.
   * @param cols array of `[index, size]` to update column sizes
   */
  resizeCols(cols: VGridItemResize[]): void;
  /**
   * Resize individual rows.
   * @param rows array of `[index, size]` to update row sizes
   */
  resizeRows(rows: VGridItemResize[]): void;
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
   * Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
   * @defaultValue 200
   */
  bufferSize?: number;
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
  /** Reference to the rendered DOM element (the one that scrolls). */
  domRef?: Ref<HTMLDivElement>;
  /** Reference to the inner rendered DOM element (the one that contains all the cells). */
  innerDomRef?: Ref<HTMLDivElement>;
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
      bufferSize,
      initialRowCount,
      initialColCount,
      item: ItemElement = "div",
      domRef,
      innerDomRef,
      onScroll: onScrollProp,
      onScrollEnd: onScrollEndProp,
      style,
      ...attrs
    },
    ref
  ): ReactElement => {
    const [rowStore, colStore, resizer, scroller] = useStatic(() => {
      const _rowStore = createVirtualStore(
        initCache(rowCount, cellHeight),
        initialRowCount
      );
      const _colStore = createVirtualStore(
        initCache(colCount, cellWidth),
        initialColCount
      );
      return [
        _rowStore,
        _colStore,
        createGridResizer(_rowStore, _colStore),
        createGridScroller(_rowStore, _colStore),
      ];
    });
    // The elements length and cached items length are different just after element is added/removed.
    if (rowCount !== rowStore.$getItemsLength()) {
      rowStore.$update(ACTION_ITEMS_LENGTH_CHANGE, [rowCount]);
    }
    if (colCount !== colStore.$getItemsLength()) {
      colStore.$update(ACTION_ITEMS_LENGTH_CHANGE, [colCount]);
    }

    const [rowStateVersion, rowRerender] = useReducer(
      rowStore.$getStateVersion,
      undefined,
      rowStore.$getStateVersion
    );
    const [colStateVersion, colRerender] = useReducer(
      colStore.$getStateVersion,
      undefined,
      colStore.$getStateVersion
    );

    const isVerticalScrolling = rowStore.$isScrolling();
    const isHorizontalScrolling = colStore.$isScrolling();
    const height = getScrollSize(rowStore);
    const width = getScrollSize(colStore);
    const rootRef = useRef<HTMLDivElement>(null);
    const onScroll = useLatestRef(onScrollProp);
    const onScrollEnd = useLatestRef(onScrollEndProp);

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      // store must be subscribed first because others may dispatch update on init depending on implementation
      rowStore.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
        if (sync) {
          flushSync(rowRerender);
        } else {
          rowRerender();
        }
      });
      colStore.$subscribe(UPDATE_VIRTUAL_STATE, (sync) => {
        if (sync) {
          flushSync(colRerender);
        } else {
          colRerender();
        }
      });
      rowStore.$subscribe(UPDATE_SCROLL_EVENT, () => {
        onScroll[refKey] && onScroll[refKey](rowStore.$getScrollOffset());
      });
      rowStore.$subscribe(UPDATE_SCROLL_END_EVENT, () => {
        onScrollEnd[refKey] && onScrollEnd[refKey]();
      });

      resizer.$observeRoot(root);
      scroller.$observe(root);
      return () => {
        rowStore.$dispose();
        colStore.$dispose();
        resizer.$dispose();
        scroller.$dispose();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      scroller.$fixScrollJump();
    }, [rowStateVersion, colStateVersion]);

    useImperativeHandle(
      ref,
      () => {
        return {
          get scrollTop() {
            return rowStore.$getScrollOffset();
          },
          get scrollLeft() {
            return colStore.$getScrollOffset();
          },
          get scrollHeight() {
            return getScrollSize(rowStore);
          },
          get scrollWidth() {
            return getScrollSize(colStore);
          },
          get viewportHeight() {
            return rowStore.$getViewportSize();
          },
          get viewportWidth() {
            return colStore.$getViewportSize();
          },
          findStartIndex: () => [
            colStore.$findStartIndex(),
            rowStore.$findStartIndex(),
          ],
          findEndIndex: () => [
            colStore.$findEndIndex(),
            rowStore.$findEndIndex(),
          ],
          getItemOffset: (indexX, indexY) => [
            colStore.$getItemOffset(indexX),
            rowStore.$getItemOffset(indexY),
          ],
          getItemSize: (indexX, indexY) => [
            colStore.$getItemSize(indexX),
            rowStore.$getItemSize(indexY),
          ],
          resizeCols(cols) {
            resizer.$resizeCols(cols);
          },
          resizeRows(rows) {
            resizer.$resizeRows(rows);
          },
          scrollToIndex: scroller.$scrollToIndex,
          scrollTo: scroller.$scrollTo,
          scrollBy: scroller.$scrollBy,
        };
      },
      []
    );

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

    const [startRowIndex, endRowIndex] = rowStore.$getRange(bufferSize);
    const [startColIndex, endColIndex] = colStore.$getRange(bufferSize);

    const items: ReactElement[] = [];
    for (let rowIndex = startRowIndex; rowIndex <= endRowIndex; rowIndex++) {
      for (let colIndex = startColIndex; colIndex <= endColIndex; colIndex++) {
        items.push(
          <Cell
            key={genKey(rowIndex, colIndex)}
            _resizer={resizer}
            _rowIndex={rowIndex}
            _colIndex={colIndex}
            _top={rowStore.$getItemOffset(rowIndex)}
            _left={colStore.$getItemOffset(colIndex)}
            _height={rowStore.$getItemSize(rowIndex)}
            _width={colStore.$getItemSize(colIndex)}
            _hide={
              rowStore.$isUnmeasuredItem(rowIndex) ||
              colStore.$isUnmeasuredItem(colIndex)
            }
            _element={ItemElement as "div"}
            _children={render(rowIndex, colIndex)}
          />
        );
      }
    }

    return (
      <div
        ref={useMergeRefs(rootRef, domRef)}
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
          ref={innerDomRef}
          style={{
            contain: "size style", // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
            overflowAnchor: "none", // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
            flex: "none", // flex style can break layout
            position: "relative",
            width: width,
            height: height,
            pointerEvents:
              isVerticalScrolling || isHorizontalScrolling ? "none" : undefined,
          }}
        >
          {items}
        </div>
      </div>
    );
  }
);
