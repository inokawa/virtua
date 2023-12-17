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
  clampEndIndex,
  clampStartIndex,
  createVirtualStore,
  SCROLL_IDLE,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { values } from "../core/utils";
import { createScroller } from "../core/scroller";
import { emptyComponents, refKey } from "./utils";
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
      cellHeight = 40,
      cellWidth = 100,
      overscan = 2,
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

    const vRerender = useRerender(vStore);
    const hRerender = useRerender(hStore);

    const [startRowIndex, endRowIndex] = vStore._getRange();
    const [startColIndex, endColIndex] = hStore._getRange();
    const vScrollDirection = vStore._getScrollDirection();
    const hScrollDirection = hStore._getScrollDirection();
    const vJumpCount = vStore._getJumpCount();
    const hJumpCount = hStore._getJumpCount();
    const height = vStore._getScrollSize();
    const width = hStore._getScrollSize();
    const rootRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      // store must be subscribed first because others may dispatch update on init depending on implementation
      const unsubscribeVStore = vStore._subscribe(
        UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
        (sync) => {
          if (sync) {
            flushSync(vRerender);
          } else {
            vRerender();
          }
        }
      );
      const unsubscribeHStore = hStore._subscribe(
        UPDATE_SCROLL_STATE + UPDATE_SIZE_STATE,
        (sync) => {
          if (sync) {
            flushSync(hRerender);
          } else {
            hRerender();
          }
        }
      );
      const cleanUpResizer = resizer._observeRoot(root);
      const cleanupVScroller = vScroller._observe(root);
      const cleanupHScroller = hScroller._observe(root);
      return () => {
        unsubscribeVStore();
        unsubscribeHStore();
        cleanUpResizer();
        cleanupVScroller();
        cleanupHScroller();
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
            return [hStore._getScrollSize(), vStore._getScrollSize()];
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

    const items: ReactElement[] = [];
    for (
      let rowIndex = overscanedStartRowIndex;
      rowIndex <= overscanedEndRowIndex;
      rowIndex++
    ) {
      for (
        let colIndex = overscanedStartColIndex;
        colIndex <= overscanedEndColIndex;
        colIndex++
      ) {
        items.push(
          <Cell
            key={genKey(rowIndex, colIndex)}
            _resizer={resizer}
            _rowIndex={rowIndex}
            _colIndex={colIndex}
            _top={vStore._getItemOffset(rowIndex)}
            _left={hStore._getItemOffset(colIndex)}
            _height={vStore._getItemSize(rowIndex)}
            _width={hStore._getItemSize(colIndex)}
            _hide={
              vStore._isUnmeasuredItem(rowIndex) ||
              hStore._isUnmeasuredItem(colIndex)
            }
            _element={ItemElement as "div"}
            _children={render(rowIndex, colIndex)}
          />
        );
      }
    }

    return (
      <Viewport
        ref={rootRef}
        width={width}
        height={height}
        scrolling={
          vScrollDirection !== SCROLL_IDLE || hScrollDirection !== SCROLL_IDLE
        }
        attrs={useMemo(
          () => ({
            ...viewportAttrs,
            style: {
              overflow: "auto",
              overflowAnchor: "none",
              contain: "strict",
              width: "100%",
              height: "100%",
              ...viewportAttrs.style,
            },
          }),
          values(viewportAttrs)
        )}
      >
        {items}
      </Viewport>
    );
  }
);
