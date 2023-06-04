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
} from "react";
import { VirtualStore, createVirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSyncExternalStore } from "./useSyncExternalStore";
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
  }: CellProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const top = useSyncExternalStore(verticalStore._subscribe, () =>
      verticalStore._getItemOffset(rowIndex)
    );
    const left = useSyncExternalStore(horizontalStore._subscribe, () =>
      horizontalStore._getItemOffset(colIndex)
    );
    const vHide = useSyncExternalStore(verticalStore._subscribe, () =>
      verticalStore._isUnmeasuredItem(rowIndex)
    );
    const hHide = useSyncExternalStore(horizontalStore._subscribe, () =>
      horizontalStore._isUnmeasuredItem(colIndex)
    );
    const height = useSyncExternalStore(verticalStore._subscribe, () =>
      verticalStore._getItemSize(rowIndex)
    );
    const width = useSyncExternalStore(horizontalStore._subscribe, () =>
      horizontalStore._getItemSize(colIndex)
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
            [verticalStore._isRtl() ? "right" : "left"]: left,
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
  const height = useSyncExternalStore(vStore._subscribe, vStore._getScrollSize);
  const width = useSyncExternalStore(hStore._subscribe, hStore._getScrollSize);

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
export interface VGridHandle {}

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
    _ref // TODO implement
  ): ReactElement => {
    const [verticalScrolling, setVerticalScrolling] = useState(false);
    const [horizontalScrolling, setHorizontalScrolling] = useState(false);
    // https://github.com/facebook/react/issues/25191#issuecomment-1237456448
    const [vStore, hStore, resizer, verticalScroller, horizontalScroller] =
      useStatic(() => {
        const dummy = () => {};
        const _vs = createVirtualStore(
          rowCount,
          cellHeight,
          false,
          !!rtlProp,
          initialRowCount,
          setVerticalScrolling,
          dummy
        );
        const _hs = createVirtualStore(
          colCount,
          cellWidth,
          true,
          !!rtlProp,
          initialColCount,
          setHorizontalScrolling,
          dummy
        );
        const resizer = createGridResizer(_vs, _hs);
        return [
          _vs,
          _hs,
          resizer,
          createScroller(_vs, () => resizer._isJustResized()),
          createScroller(_hs, () => resizer._isJustResized(true)),
        ];
      });
    // The elements length and cached items length are different just after element is added/removed.
    vStore._updateCacheLength(rowCount);
    hStore._updateCacheLength(colCount);

    const [startRowIndex, endRowIndex] = useSyncExternalStore(
      vStore._subscribe,
      vStore._getRange
    );
    const [startColIndex, endColIndex] = useSyncExternalStore(
      hStore._subscribe,
      hStore._getRange
    );
    const verticalJump = useSyncExternalStore(
      vStore._subscribe,
      vStore._getJump
    );
    const horizontalJump = useSyncExternalStore(
      hStore._subscribe,
      hStore._getJump
    );
    const rootRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
      const root = rootRef[refKey]!;
      const unobserve = resizer._observeRoot(root);
      const vCleanup = verticalScroller._initRoot(root);
      const hCleanup = horizontalScroller._initRoot(root);
      return () => {
        unobserve();
        vCleanup();
        hCleanup();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      if (verticalJump.length) {
        verticalScroller._fixScrollJump(verticalJump, startRowIndex);
      }
    }, [verticalJump]);
    useIsomorphicLayoutEffect(() => {
      if (horizontalJump.length) {
        horizontalScroller._fixScrollJump(horizontalJump, startColIndex);
      }
    }, [horizontalJump]);

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
