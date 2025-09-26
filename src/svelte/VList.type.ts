import type { ViewportComponentAttributes } from "./types.js";
import type { VirtualizerHandle, VirtualizerProps } from "./Virtualizer.type.js";

/**
 * Props of {@link VList}.
 */
export interface VListProps<T>
  extends Pick<
      VirtualizerProps<T>,
      | "data"
      | "getKey"
      | "overscan"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "children"
      | "onscroll"
      | "onscrollend"
    >,
    ViewportComponentAttributes {}

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}
