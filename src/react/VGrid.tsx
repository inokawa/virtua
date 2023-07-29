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
import { VirtualStore, createVirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import {
  SELECT_IS_SCROLLING,
  SELECT_ITEM,
  SELECT_JUMP_COUNT,
  SELECT_RANGE,
  SELECT_SCROLL_SIZE,
  useSelector,
} from "./useSelector";
import { max, min, values } from "../core/utils";
import { createScroller } from "../core/scroller";
import { refKey } from "./utils";
import { useStatic } from "./useStatic";
import {
  CustomWindowComponent,
  CustomWindowComponentProps,
  WindowComponentAttributes,
} from "..";
import { createGridResizer, GridResizer } from "../core/resizer";
import { Window as DefaultWindow } from "./Window";

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
  _isRtl: boolean;
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
    _isRtl: isRtl,
  }: CellProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const top = useSelector(
      vStore,
      () => vStore._getItemOffset(rowIndex),
      SELECT_ITEM,
      true
    );
    const left = useSelector(
      hStore,
      () => hStore._getItemOffset(colIndex),
      SELECT_ITEM,
      true
    );
    const vHide = useSelector(
      vStore,
      () => vStore._isUnmeasuredItem(rowIndex),
      SELECT_ITEM,
      true
    );
    const hHide = useSelector(
      hStore,
      () => hStore._isUnmeasuredItem(colIndex),
      SELECT_ITEM,
      true
    );
    const height = useSelector(
      vStore,
      () => vStore._getItemSize(rowIndex),
      SELECT_ITEM,
      true
    );
    const width = useSelector(
      hStore,
      () => hStore._getItemSize(colIndex),
      SELECT_ITEM,
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
            [isRtl ? "right" : "left"]: left,
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
export interface VGridProps extends WindowComponentAttributes {
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
   * You have to set true if you use this component under `direction: rtl` style.
   */
  rtl?: boolean;
  /**
   * Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
   * @defaultValue {@link Window}
   */
  element?: CustomWindowComponent;
  /**
   * Customized element type for cell element. This element will get {@link CustomCellComponentProps} as props.
   * @defaultValue "div"
   */
  cellElement?: CustomCellComponentOrElement;
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
      rtl: rtlProp,
      element: Window = DefaultWindow,
      cellElement: itemElement = "div",
      ...windowAttrs
    },
    ref
  ): ReactElement => {
    const [vStore, hStore, resizer, vScroller, hScroller, isRtl] = useStatic(
      () => {
        const _isRtl = !!rtlProp;
        const _vs = createVirtualStore(
          rowCount,
          cellHeight,
          initialRowCount,
          false
        );
        const _hs = createVirtualStore(
          colCount,
          cellWidth,
          initialColCount,
          false
        );
        return [
          _vs,
          _hs,
          createGridResizer(_vs, _hs),
          createScroller(_vs, false, _isRtl),
          createScroller(_hs, true, _isRtl),
          _isRtl,
        ];
      }
    );
    // The elements length and cached items length are different just after element is added/removed.
    vStore._updateCacheLength(rowCount);
    hStore._updateCacheLength(colCount);

    const [startRowIndex, endRowIndex] = useSelector(
      vStore,
      vStore._getRange,
      SELECT_RANGE
    );
    const [startColIndex, endColIndex] = useSelector(
      hStore,
      hStore._getRange,
      SELECT_RANGE
    );
    const verticalScrolling = useSelector(
      vStore,
      vStore._getIsScrolling,
      SELECT_IS_SCROLLING
    );
    const horizontalScrolling = useSelector(
      hStore,
      hStore._getIsScrolling,
      SELECT_IS_SCROLLING
    );
    const vJumpCount = useSelector(
      vStore,
      vStore._getJumpCount,
      SELECT_JUMP_COUNT
    );
    const hJumpCount = useSelector(
      hStore,
      hStore._getJumpCount,
      SELECT_JUMP_COUNT
    );
    const height = useSelector(
      vStore,
      vStore._getCorrectedScrollSize,
      SELECT_SCROLL_SIZE,
      true
    );
    const width = useSelector(
      hStore,
      hStore._getCorrectedScrollSize,
      SELECT_SCROLL_SIZE,
      true
    );
    const rootRef = useRef<HTMLDivElement>(null);

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
              hScroller._getActualScrollSize(),
              vScroller._getActualScrollSize(),
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
            hScroller._scrollTo(hStore._getScrollOffset() + offsetX);
            vScroller._scrollTo(vStore._getScrollOffset() + offsetY);
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

    const overscanedStartRowIndex = max(startRowIndex - overscan, 0);
    const overscanedEndRowIndex = min(endRowIndex + overscan, rowCount - 1);
    const overscanedStartColIndex = max(startColIndex - overscan, 0);
    const overscanedEndColIndex = min(endColIndex + overscan, colCount - 1);
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
              _element={itemElement as "div"}
              _children={render(i, j)}
              _isRtl={isRtl}
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
      <Window
        ref={rootRef}
        width={width}
        height={height}
        scrolling={verticalScrolling || horizontalScrolling}
        attrs={useMemo(
          () => ({
            ...windowAttrs,
            style: {
              overflow: "auto",
              contain: "strict",
              // transform: "translate3d(0px, 0px, 0px)",
              // willChange: "scroll-position",
              // backfaceVisibility: "hidden",
              width: "100%",
              height: "100%",
              padding: 0,
              margin: 0,
              ...windowAttrs.style,
            },
          }),
          values(windowAttrs)
        )}
      >
        {items}
      </Window>
    );
  }
);
