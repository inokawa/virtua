import type { ItemsRange } from "../types.js";

/**
 * @internal
 */
export interface Layout {
  $getRange(startOffset: number, endOffset: number): ItemsRange;
  $findIndex(offset: number): number;
  $getItemOffset(index: number): number;
  $getItemSize(index: number): number;
  $setItemSize(index: number, size: number): boolean;
  $isSizeEqual(index: number, size?: number): boolean;
  $getTotalSize(): number;
  $getLength(): number;
  $setLength(length: number, isShift?: boolean): number;
  $estimateDefaultSize(startIndex: number): number;
}
