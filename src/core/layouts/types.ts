import type { ItemResize, ItemsRange } from "../types.js";

/**
 * @internal
 */
export interface Layout<T = never> {
  $getRange(startOffset: number, endOffset: number): ItemsRange;
  $findIndex(offset: number): number;
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
  $relayout?(input: T, scrollOffset: number): number | undefined;
}
