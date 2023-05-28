import { once } from "./utils";

// The scroll position may be negative value in rtl direction.
// https://github.com/othree/jquery.rtl-scroll-type
export const hasNegativeOffsetInRtl = once((scrollable: HTMLElement) => {
  const key = "scrollLeft";
  const prev = scrollable[key];
  scrollable[key] = 1;
  const isNegative = scrollable[key] === 0;
  scrollable[key] = prev;
  return isNegative;
});
