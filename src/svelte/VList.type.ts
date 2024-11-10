import type { ViewportComponentAttributes } from "./types.js";
import type {
  VirtualizerHandle,
  VirtualizerProps,
} from "./Virtualizer.type.js";

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
      | "keepMounted"
    >,
    ViewportComponentAttributes {}

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}
