import type { ItemResize, ItemsRange } from "../types.js";

/**
 * @internal
 */
export interface Layout {
  $getRange(startOffset: number, endOffset: number): ItemsRange;
  $findIndex(offset: number): number;
  $getItemOffset(index: number): number;
  $getItemSize(index: number): number;
  $isSizeEqual(index: number, size?: number): boolean;
  $getTotalSize(): number;
  $getLength(): number;
  $setLength(length: number, isShift?: boolean): void;
  $setItemSizes(resizes: readonly ItemResize[], viewportSize: number): void;
  $isEstimating(): boolean;
}
