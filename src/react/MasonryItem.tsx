import {
  memo,
  useRef,
  useMemo,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { type Driver } from "../core/index.js";

interface MasonryItemProps {
  _children: ReactNode;
  _resizer: Driver["$observeItem"];
  _index: number;
  _offset: number;
  _crossOffset: string;
  _crossSize: string;
  _hide: boolean;
}

/**
 * @internal
 */
export const MasonryItem = /*#__PURE__*/ memo(
  ({
    _children: children,
    _resizer: resizer,
    _index: index,
    _offset: offset,
    _crossOffset: crossOffset,
    _crossSize: crossSize,
    _hide: hide,
  }: MasonryItemProps): ReactElement => {
    const ref = useRef<HTMLDivElement>(null);

    // The index may be changed if elements are inserted to or removed from the start of data
    useIsomorphicLayoutEffect(() => resizer(ref.current!, index), [index]);

    const style = useMemo(
      (): CSSProperties => ({
        contain: "layout style",
        overflowAnchor: "none", // https://drafts.csswg.org/css-scroll-anchoring/#candidate-examination
        position: "absolute",
        top: offset,
        insetInlineStart: crossOffset,
        width: crossSize,
        visibility: hide ? "hidden" : undefined,
      }),
      [offset, crossOffset, crossSize, hide],
    );

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  },
);
