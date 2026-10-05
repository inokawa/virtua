import type { ItemResize, ItemsRange } from "../types.js";

/**
 * @internal
 */
export interface Layout {
  $getRange(startOffset: number, endOffset: number): ItemsRange;
  $getItemOffset(index: number): number;
  $getItemSize(index: number): number;
  $isSizeEqual(index: number, size?: number): boolean;
  $getTotalSize(): number;
  $getLength(): number;
  $setLength(length: number, isShift?: boolean): number;
  $resize(
    resizes: readonly ItemResize[],
    shouldKeep: (index: number) => boolean,
    scrollOffset: number,
    viewportSize: number,
  ): number;
  $isEstimating(): boolean;
}
