import {
  memo,
  useRef,
  useMemo,
  CSSProperties,
  ReactElement,
  ReactNode,
} from "react";
import { UPDATE_SIZE, VirtualStore } from "../core/store";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useSelector } from "./useSelector";
import { ListResizer } from "../core/resizer";
import { refKey } from "./utils";
import { isRTLDocument } from "../core/environment";

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
};

export const ListItem = memo(
  ({
    _children: children,
    _resizer: resizer,
    _store: store,
    _index: index,
    _element: Element,
    _isHorizontal: isHorizontal,
  }: ListItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    const offset = useSelector(
      store,
      () => store._getItemOffset(index),
      UPDATE_SIZE,
      true
    );
    const hide = useSelector(
      store,
      () => store._isUnmeasuredItem(index),
      UPDATE_SIZE,
      true
    );

    // The index may be changed if elements are inserted to or removed from the start of props.children
    useIsomorphicLayoutEffect(
      () => resizer._observeItem(ref[refKey]!, index),
      [index]
    );

    return (
      <Element
        ref={ref}
        style={useMemo((): CSSProperties => {
          const style: CSSProperties = {
            margin: 0,
            padding: 0,
            position: "absolute",
            [isHorizontal ? "height" : "width"]: "100%",
            [isHorizontal ? "top" : "left"]: 0,
            [isHorizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
              offset,
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
