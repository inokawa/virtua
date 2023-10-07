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
  UPDATE_SCROLL_DIRECTION,
  UPDATE_JUMP,
  UPDATE_SCROLL,
  UPDATE_SIZE,
  VirtualStore,
  createVirtualStore,
  SCROLL_IDLE,
} from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSelector } from "./useSelector";
import { values } from "../core/utils";
import { createScroller } from "../core/scroller";
import {
  clampEndIndex,
  clampStartIndex,
  emptyComponents,
  refKey,
} from "./utils";
import { useStatic } from "./useStatic";
import {
  CustomViewportComponent,
  CustomViewportComponentProps,
  ViewportComponentAttributes,
} from "..";
import { createGridResizer, GridResizer } from "../core/resizer";
import { Viewport as DefaultViewport } from "./Viewport";
import { flushSync } from "react-dom";
import { isRtlDocument } from "../core/environment";

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
  _vStore: VirtualStore;
  _hStore: VirtualStore;
  _rowIndex: number;
  _colIndex: number;
  _element: "div";
};

const Cell = memo(
  ({
    _children: children,
    _resizer: resizer,
    _vStore: vStore,
    _hStore: hStore,
    _rowIndex: rowIndex,
    _colIndex: colIndex,
    _element: Element,
  }: CellProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const top = useSelector(
      vStore,
      () => vStore._getItemOffset(rowIndex),
      UPDATE_SIZE,
      true
    );
    const left = useSelector(
      hStore,
      () => hStore._getItemOffset(colIndex),
      UPDATE_SIZE,
      true
    );
    const vHide = useSelector(
      vStore,
      () => vStore._isUnmeasuredItem(rowIndex),
      UPDATE_SIZE,
      true
    );
    const hHide = useSelector(
      hStore,
      () => hStore._isUnmeasuredItem(colIndex),
      UPDATE_SIZE,
      true
    );
    const height = useSelector(
      vStore,
      () => vStore._getItemSize(rowIndex),
      UPDATE_SIZE,
      true
    );
    const width = useSelector(
      hStore,
      () => hStore._getItemSize(colIndex),
      UPDATE_SIZE,
      true
    );

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
            [isRtlDocument() ? "right" : "left"]: left,
            visibility: vHide || hHide ? "hidden" : "visible",
            minHeight: height,
            minWidth: width,
          };
          return style;
        }, [top, left, width, height, vHide, hHide])}
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
      const _vs = createVirtualStore(
        flushSync,
        rowCount,
        cellHeight,
        initialRowCount
      );
      const _hs = createVirtualStore(
        flushSync,
        colCount,
        cellWidth,
        initialColCount
      );
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

    const [startRowIndex, endRowIndex] = useSelector(
      vStore,
      vStore._getRange,
      UPDATE_SCROLL + UPDATE_SIZE
    );
    const [startColIndex, endColIndex] = useSelector(
      hStore,
      hStore._getRange,
      UPDATE_SCROLL + UPDATE_SIZE
    );
    const vScrollDirection = useSelector(
      vStore,
      vStore._getScrollDirection,
      UPDATE_SCROLL_DIRECTION
    );
    const hScrollDirection = useSelector(
      hStore,
      hStore._getScrollDirection,
      UPDATE_SCROLL_DIRECTION
    );
    const vJumpCount = useSelector(vStore, vStore._getJumpCount, UPDATE_JUMP);
    const hJumpCount = useSelector(hStore, hStore._getJumpCount, UPDATE_JUMP);
    const height = useSelector(
      vStore,
      vStore._getCorrectedScrollSize,
      UPDATE_SIZE,
      true
    );
    const width = useSelector(
      hStore,
      hStore._getCorrectedScrollSize,
      UPDATE_SIZE,
      true
    );
    const rootRef = useRef<HTMLDivElement>(null);
    const vScrolling = vScrollDirection !== SCROLL_IDLE;
    const hScrolling = hScrollDirection !== SCROLL_IDLE;

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      const unobserve = resizer._observeRoot(root);
      const vCleanup = vScroller._initRoot(root);
      const hCleanup = hScroller._initRoot(root);
      return () => {
        unobserve();
        vCleanup();
        hCleanup();
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

    const items = useMemo(() => {
      const res: ReactElement[] = [];
      for (let i = overscanedStartRowIndex; i <= overscanedEndRowIndex; i++) {
        for (let j = overscanedStartColIndex; j <= overscanedEndColIndex; j++) {
          res.push(
            <Cell
              key={genKey(i, j)}
              _resizer={resizer}
              _vStore={vStore}
              _hStore={hStore}
              _rowIndex={i}
              _colIndex={j}
              _element={ItemElement as "div"}
              _children={render(i, j)}
            />
          );
        }
      }

      return res;
    }, [
      render,
      overscanedStartRowIndex,
      overscanedEndRowIndex,
      overscanedStartColIndex,
      overscanedEndColIndex,
    ]);

    return (
      <Viewport
        ref={rootRef}
        width={width}
        height={height}
        scrolling={vScrolling || hScrolling}
        attrs={useMemo(
          () => ({
            ...viewportAttrs,
            style: {
              overflow: "auto",
              contain: "strict",
              // transform: "translate3d(0px, 0px, 0px)",
              // willChange: "scroll-position",
              // backfaceVisibility: "hidden",
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
