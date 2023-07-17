import {
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  ReactNode,
} from "react";
import { VirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSelector } from "./useSelector";
import { ListResizer } from "../core/resizer";
import { refKey } from "./utils";

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

type ListItemProps = {
  _children: ReactNode;
  _resizer: ListResizer;
  _store: VirtualStore;
  _index: number;
  _element: "div";
  _isHorizontal: boolean;
  _isRtl: boolean;
};

export const ListItem = memo(
  ({
    _children: children,
    _resizer: resizer,
    _store: store,
    _index: index,
    _element: Element,
    _isHorizontal: isHorizontal,
    _isRtl: isRtl,
  }: ListItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const offset = useSelector(store, () => store._getItemOffset(index), true);
    const hide = useSelector(store, () => store._isUnmeasuredItem(index), true);

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(
      () => resizer._observeItem(ref[refKey]!, index),
      [index]
    );

    return (
      <Element
        ref={ref}
        style={useMemo((): CSSProperties => {
          const leftOrRightKey = isRtl ? "right" : "left";
          const style: CSSProperties = {
            margin: 0,
            padding: 0,
            position: "absolute",
            [isHorizontal ? "height" : "width"]: "100%",
            [isHorizontal ? "top" : leftOrRightKey]: 0,
            [isHorizontal ? leftOrRightKey : "top"]: offset,
            visibility: hide ? "hidden" : "visible",
            // willChange: "transform",
          };
          if (isHorizontal) {
            style.display = "flex";
          }
          return style;
        }, [offset, hide])}
      >
        {children}
      </Element>
    );
  }
);
