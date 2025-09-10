import type { ViewportComponentAttributes } from "./types";
import type { VirtualizerHandle, VirtualizerProps } from "./Virtualizer.type";

/**
 * Props of {@link VList}.
 */
export interface VListProps<T>
  extends Pick<
      VirtualizerProps<T>,
      | "data"
      | "getKey"
      | "bufferSize"
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
