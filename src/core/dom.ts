import { once } from "./utils";

// The scroll position may be negative value in rtl direction.
//
// left  right result
// -100  0     true    spec compliant
// 0     100   false   probably Chrome earlier than v85
// https://github.com/othree/jquery.rtl-scroll-type
export const hasNegativeOffsetInRtl = /*#__PURE__*/ once(
  (scrollable: HTMLElement) => {
    const key = "scrollLeft";
    const prev = scrollable[key];
    scrollable[key] = 1;
    // scrollLeft can be positive under some specific situations even if negative mode, so we use `<` for now.
    const isNegative = scrollable[key] < 1;
    scrollable[key] = prev;
    return isNegative;
  }
);
