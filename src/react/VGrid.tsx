import {
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  forwardRef,
  ReactNode,
  RefObject,
  useState,
  useImperativeHandle,
} from "react";
import { VirtualStore, createVirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useStore } from "./useStore";
import { max, min } from "../core/utils";
import { createScroller } from "../core/scroller";
import { refKey } from "./utils";
import { useStatic } from "./useStatic";
import { WindowComponentAttributes } from "..";
import { createGridResizer, GridResizer } from "../core/resizer";

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
  _verticalStore: VirtualStore;
  _horizontalStore: VirtualStore;
  _rowIndex: number;
  _colIndex: number;
  _element: "div";
  _isRtl: boolean;
};

const Cell = memo(
  ({
    _children: children,
    _resizer: resizer,
    _verticalStore: verticalStore,
    _horizontalStore: horizontalStore,
    _rowIndex: rowIndex,
    _colIndex: colIndex,
    _element: Element,
    _isRtl: isRtl,
  }: CellProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const top = useStore(
      verticalStore,
      () => verticalStore._getItemOffset(rowIndex),
      true
    );
    const left = useStore(
      horizontalStore,
      () => horizontalStore._getItemOffset(colIndex),
      true
    );
    const vHide = useStore(
      verticalStore,
      () => verticalStore._isUnmeasuredItem(rowIndex),
      true
    );
    const hHide = useStore(
      horizontalStore,
      () => horizontalStore._isUnmeasuredItem(colIndex),
      true
    );
    const height = useStore(
      verticalStore,
      () => verticalStore._getItemSize(rowIndex),
      true
    );
    const width = useStore(
      horizontalStore,
      () => horizontalStore._getItemSize(colIndex),
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
 * Props of customized scrollable component for {@link VGrid}.
 */
export interface CustomGridWindowComponentProps {
  children: ReactNode;
  scrollWidth: number;
  scrollHeight: number;
  scrolling: boolean;
  attrs: WindowComponentAttributes;
}

const DefaultWindow = forwardRef<any, CustomGridWindowComponentProps>(
  (
    { children, scrollWidth, scrollHeight, scrolling, attrs },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: scrollWidth,
              height: scrollHeight,
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [scrollWidth, scrollHeight, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
);

export type CustomGridWindowComponent = typeof DefaultWindow;

const Window = ({
  _children: children,
  _ref: ref,
  _vStore: vStore,
  _hStore: hStore,
  _element: Element,
  _scrolling: scrolling,
  _attrs: attrs,
}: {
  _children: ReactNode;
  _ref: RefObject<HTMLDivElement>;
  _vStore: VirtualStore;
  _hStore: VirtualStore;
  _element: CustomGridWindowComponent;
  _scrolling: boolean;
  _attrs: WindowComponentAttributes;
}) => {
  const height = useStore(vStore, vStore._getScrollSize);
  const width = useStore(hStore, hStore._getScrollSize);

  return (
    <Element
      ref={ref}
      scrollWidth={width}
      scrollHeight={height}
      scrolling={scrolling}
      attrs={useMemo(
        () => ({
          ...attrs,
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
   * Customized element type for scrollable element. This element will get {@link CustomGridWindowComponentProps} as props.
   * @defaultValue {@link DefaultWindow}
   */
  element?: CustomGridWindowComponent;
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
      element = DefaultWindow,
      cellElement: itemElement = "div",
      ...windowAttrs
    },
    ref
  ): ReactElement => {
    const [verticalScrolling, setVerticalScrolling] = useState(false);
    const [horizontalScrolling, setHorizontalScrolling] = useState(false);
    const [vStore, hStore, resizer, vScroller, hScroller, isRtl] = useStatic(
      () => {
        const _isRtl = !!rtlProp;
        const dummy = () => {};
        const _vs = createVirtualStore(
          rowCount,
          cellHeight,
          initialRowCount,
          false,
          setVerticalScrolling,
          dummy
        );
        const _hs = createVirtualStore(
          colCount,
          cellWidth,
          initialColCount,
          false,
          setHorizontalScrolling,
          dummy
        );
        const resizer = createGridResizer(_vs, _hs);
        return [
          _vs,
          _hs,
          resizer,
          createScroller(_vs, false, _isRtl, () => resizer._isJustResized()),
          createScroller(_hs, true, _isRtl, () => resizer._isJustResized(true)),
          _isRtl,
        ];
      }
    );
    // The elements length and cached items length are different just after element is added/removed.
    vStore._updateCacheLength(rowCount);
    hStore._updateCacheLength(colCount);

    const [startRowIndex, endRowIndex] = useStore(vStore, vStore._getRange);
    const [startColIndex, endColIndex] = useStore(hStore, hStore._getRange);
    const verticalJump = useStore(vStore, vStore._getJump);
    const horizontalJump = useStore(hStore, hStore._getJump);
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
      if (verticalJump.length) {
        vScroller._fixScrollJump(verticalJump, startRowIndex);
      }
    }, [verticalJump]);
    useIsomorphicLayoutEffect(() => {
      if (horizontalJump.length) {
        hScroller._fixScrollJump(horizontalJump, startColIndex);
      }
    }, [horizontalJump]);

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
            hScroller._scrollToIndex(indexX, colCount);
            vScroller._scrollToIndex(indexY, rowCount);
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
      [rowCount, colCount]
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

    const startRowIndexWithMargin = max(startRowIndex - overscan, 0);
    const endRowIndexWithMargin = min(endRowIndex + overscan, rowCount - 1);
    const startColIndexWithMargin = max(startColIndex - overscan, 0);
    const endColIndexWithMargin = min(endColIndex + overscan, colCount - 1);
    const items = useMemo(() => {
      const res: ReactElement[] = [];
      for (let i = startRowIndexWithMargin; i <= endRowIndexWithMargin; i++) {
        for (let j = startColIndexWithMargin; j <= endColIndexWithMargin; j++) {
          res.push(
            <Cell
              key={genKey(i, j)}
              _resizer={resizer}
              _verticalStore={vStore}
              _horizontalStore={hStore}
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
      startRowIndexWithMargin,
      endRowIndexWithMargin,
      startColIndexWithMargin,
      endColIndexWithMargin,
    ]);

    return (
      <Window
        _ref={rootRef}
        _vStore={vStore}
        _hStore={hStore}
        _element={element}
        _scrolling={verticalScrolling || horizontalScrolling}
        _children={items}
        _attrs={windowAttrs}
      />
    );
  }
);
