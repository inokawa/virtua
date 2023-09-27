import {
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  forwardRef,
  ReactNode,
  useImperativeHandle,
} from "react";
import {
  ACTION_ITEMS_LENGTH_CHANGE,
  UPDATE_SCROLL_STATE,
  UPDATE_SIZE_STATE,
  createVirtualStore,
  SCROLL_IDLE,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { arrayFrom, indexes, values } from "../core/utils";
import { createScroller } from "../core/scroller";
import {
  clampEndIndex,
  clampStartIndex,
  emptyComponents,
  refKey,
} from "./utils";
import { useStatic } from "./useStatic";
import { createGridResizer, GridResizer } from "../core/resizer";
import {
  Viewport as DefaultViewport,
  CustomViewportComponent,
  CustomViewportComponentProps,
  ViewportComponentAttributes,
} from "./Viewport";
import { flushSync } from "react-dom";
import { isRTLDocument } from "../core/environment";
import { useRerender } from "./useRerender";

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

type CustomCellComponentOrElement =
  | keyof JSX.IntrinsicElements
  | CustomCellComponent;

type CellProps = {
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
  _fixedCol?: boolean;
  _fixedRow?: boolean;
};

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
    _fixedCol,
    _fixedRow,
  }: CellProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(
      () => resizer._observeItem(ref[refKey]!, rowIndex, colIndex),
      [colIndex, rowIndex]
    );

    return (
      <Element
        ref={ref}
        style={useMemo((): CSSProperties => {
          const style: CSSProperties = {
            display: "grid",
            margin: 0,
            padding: 0,
            gridColumn: `${colIndex + 1} / ${colIndex + 1}`,
            gridRow: `${rowIndex + 1} / ${rowIndex + 1}`,
            visibility: "visible",
            // textOverflow: "ellipsis",
            // minHeight: height,
            // minWidth: width,
          };
          if (_fixedCol) {
            style.position = "sticky";
            style[isRTLDocument() ? "right" : "left"] = left;
            style.zIndex = 1;
          }
          if (_fixedRow) {
            style.position = "sticky";
            style.top = top;
            style.zIndex = ((style.zIndex as number) || 0) + 1;
          }
          return style;
        }, [
          top,
          left,
          // width,
          // height,
          colIndex,
          rowIndex,
          _fixedCol,
          _fixedRow,
        ])}
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
   * Get current scrollTop or scrollLeft.
   */
  readonly scrollOffset: [x: number, y: number];
  /**
   * Get current scrollHeight or scrollWidth.
   */
  readonly scrollSize: [width: number, height: number];
  /**
   * Get current offsetHeight or offsetWidth.
   */
  readonly viewportSize: [width: number, height: number];
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
   *
   */
  fixedRows?: number;
  /**
   *
   */
  fixedCols?: number;
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
   * Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
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
   * Customized components for advanced usage.
   */
  components?: {
    /**
     * Component for scrollable element. This component will get {@link CustomViewportComponentProps} as props.
     * @defaultValue {@link DefaultViewport}
     */
    Root?: CustomViewportComponent;
    /**
     * Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
     * @defaultValue "div"
     */
    Cell?: CustomCellComponentOrElement;
  };
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
      fixedCols = 0,
      fixedRows = 0,
      cellHeight = 40,
      cellWidth = 100,
      overscan = 4,
      initialRowCount,
      initialColCount,
      components: {
        Root: Viewport = DefaultViewport,
        Cell: ItemElement = "div",
      } = emptyComponents as {
        Root?: undefined;
        Cell?: undefined;
      },
      ...viewportAttrs
    },
    ref
  ): ReactElement => {
    const [vStore, hStore, resizer, vScroller, hScroller] = useStatic(() => {
      const _vs = createVirtualStore(rowCount, cellHeight, initialRowCount);
      const _hs = createVirtualStore(colCount, cellWidth, initialColCount);
      return [
        _vs,
        _hs,
        createGridResizer(_vs, _hs),
        createScroller(_vs, false),
        createScroller(_hs, true),
      ];
    });
    // The elements length and cached items length are different just after element is added/removed.
    if (rowCount !== vStore._getItemsLength()) {
      vStore._update(ACTION_ITEMS_LENGTH_CHANGE, [rowCount]);
    }
    if (colCount !== hStore._getItemsLength()) {
      hStore._update(ACTION_ITEMS_LENGTH_CHANGE, [colCount]);
    }

    const rerender = useRerender();

    const [startRowIndex, endRowIndex] = vStore._getRange();
    const [startColIndex, endColIndex] = hStore._getRange();
    const vScrollDirection = vStore._getScrollDirection();
    const hScrollDirection = hStore._getScrollDirection();
    const vJumpCount = vStore._getJumpCount();
    const hJumpCount = hStore._getJumpCount();
    const height = vStore._getCorrectedScrollSize();
    const width = hStore._getCorrectedScrollSize();
    const rootRef = useRef<HTMLDivElement>(null);
    const vScrolling = vScrollDirection !== SCROLL_IDLE;
    const hScrolling = hScrollDirection !== SCROLL_IDLE;

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      const cleanUpResizer = resizer._observeRoot(root);
      const cleanupVScroller = vScroller._initRoot(root);
      const cleanupHScroller = hScroller._initRoot(root);
      const onRerender = (sync?: boolean) => {
        if (sync) {
          flushSync(rerender);
        } else {
          rerender();
        }
      };
      const unsubscribeVStore = vStore._subscribe(
        UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
        onRerender
      );
      const unsubscribeHStore = hStore._subscribe(
        UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
        onRerender
      );
      return () => {
        cleanUpResizer();
        cleanupVScroller();
        cleanupHScroller();
        unsubscribeVStore();
        unsubscribeHStore();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      const jump = vStore._flushJump();
      if (!jump) return;

      vScroller._fixScrollJump(jump);
    }, [vJumpCount]);
    useIsomorphicLayoutEffect(() => {
      const jump = hStore._flushJump();
      if (!jump) return;

      hScroller._fixScrollJump(jump);
    }, [hJumpCount]);

    useImperativeHandle(
      ref,
      () => {
        return {
          get scrollOffset(): [number, number] {
            return [hStore._getScrollOffset(), vStore._getScrollOffset()];
          },
          get scrollSize(): [number, number] {
            return [
              hStore._getCorrectedScrollSize(),
              vStore._getCorrectedScrollSize(),
            ];
          },
          get viewportSize(): [number, number] {
            return [hStore._getViewportSize(), vStore._getViewportSize()];
          },
          scrollToIndex(indexX, indexY) {
            hScroller._scrollToIndex(indexX);
            vScroller._scrollToIndex(indexY);
          },
          scrollTo(offsetX, offsetY) {
            hScroller._scrollTo(offsetX);
            vScroller._scrollTo(offsetY);
          },
          scrollBy(offsetX, offsetY) {
            hScroller._scrollBy(offsetX);
            vScroller._scrollBy(offsetY);
          },
        };
      },
      []
    );

    const render = useMemo(() => {
      const cache = new Map<string, ReactNode>();
      return (rowIndex: number, colIndex: number) => {
        const key = genKey(rowIndex, colIndex);
        let e: ReactNode | undefined = cache.get(key);
        if (!e) {
          cache.set(key, (e = children({ rowIndex, colIndex })));
        }
        return e;
      };
    }, [children]);

    const overscanedStartRowIndex = clampStartIndex(
      startRowIndex,
      overscan,
      vScrollDirection
    );
    const overscanedEndRowIndex = clampEndIndex(
      endRowIndex,
      overscan,
      vScrollDirection,
      rowCount
    );
    const overscanedStartColIndex = clampStartIndex(
      startColIndex,
      overscan,
      hScrollDirection
    );
    const overscanedEndColIndex = clampEndIndex(
      endColIndex,
      overscan,
      hScrollDirection,
      colCount
    );

    let gridTemplateColumns = "";
    for (let i = 0; i < colCount; i++) {
      if (i !== 0) {
        gridTemplateColumns += " ";
      }
      gridTemplateColumns += `min(${hStore._getItemSize(i)}px)`;
    }
    let gridTemplateRows = "";
    for (let i = 0; i < rowCount; i++) {
      if (i !== 0) {
        gridTemplateRows += " ";
      }
      // gridTemplateRows += `min(${vStore._getItemSize(i)}px)`;
    }

    return (
      <div
        ref={rootRef}
        // width={width}
        // height={height}
        // scrolling={vScrolling || hScrolling}
        {...useMemo(
          () => ({
            ...viewportAttrs,
            style: {
              overflow: "auto",
              contain: "strict",
              width: "100%",
              height: "100%",
              ...viewportAttrs.style,
            },
          }),
          values(viewportAttrs)
        )}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${colCount}, 1fr)`,
            // gridTemplateColumns,
            // gridTemplateRows,
            // gridTemplateRows: "auto",
            // gridTemplateRows: "fit-content",
            // TODO fallback with observerd size.
            gridTemplateRows: `repeat(${rowCount}, min-content)`,
            // gridTemplateRows: "min-content",
            // gridAutoColumns: "max-content",
            // gridAutoRows: "max-content",
            // gridAutoRows:  `minmax(100px, auto)`,
            width,
            height,
            visibility: "hidden",
            pointerEvents: vScrolling || hScrolling ? "none" : "auto",
          }}
        >
          {useMemo(() => {
            const elements: ReactElement[] = [];

            const fixedRowsSet = new Set(indexes(0, fixedRows - 1));
            const fixedColsSet = new Set(indexes(0, fixedCols - 1));

            const renderableRows = arrayFrom(
              new Set([
                ...arrayFrom(fixedRowsSet),
                ...indexes(overscanedStartRowIndex, overscanedEndRowIndex),
              ])
            );
            const renderableCols = arrayFrom(
              new Set([
                ...arrayFrom(fixedColsSet),
                ...indexes(overscanedStartColIndex, overscanedEndColIndex),
              ])
            );

            for (const rowIndex of renderableRows) {
              for (const colIndex of renderableCols) {
                elements.push(
                  <Cell
                    key={genKey(rowIndex, colIndex)}
                    _resizer={resizer}
                    _vStore={vStore}
                    _hStore={hStore}
                    _rowIndex={rowIndex}
                    _colIndex={colIndex}
                    _element={ItemElement as "div"}
                    _children={render(rowIndex, colIndex)}
                    _fixedCol={fixedColsSet.has(colIndex)}
                    _fixedRow={fixedRowsSet.has(rowIndex)}
                  />
                );
              }
            }

            return elements;
          }, [
            render,
            overscanedStartRowIndex,
            overscanedEndRowIndex,
            overscanedStartColIndex,
            overscanedEndColIndex,
            fixedCols,
            fixedRows,
          ])}
        </div>
      </div>
    );
  }
);
