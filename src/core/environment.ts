import { computeStyle, once } from "./utils";

export const isBrowser = typeof window !== "undefined";

const getDocumentRoot = () => document.documentElement;

// The scroll position may be negative value in rtl direction.
//
// left  right result
// -100  0     true    spec compliant
// 0     100   false   probably Chrome earlier than v85
// https://github.com/othree/jquery.rtl-scroll-type
export const hasNegativeOffsetInRTL = /*#__PURE__*/ once(
  (scrollable: HTMLElement): boolean => {
    const key = "scrollLeft";
    const prev = scrollable[key];
    scrollable[key] = 1;
    // scrollLeft can be positive under some specific situations even if negative mode, so we use `<` for now.
    const isNegative = scrollable[key] < 1;
    scrollable[key] = prev;
    return isNegative;
  }
);

export const isRTLDocument = /*#__PURE__*/ once((): boolean => {
  // TODO support SSR in rtl
  return isBrowser
    ? computeStyle(getDocumentRoot()).direction === "rtl"
    : false;
});

// Currently, all browsers on iOS/iPadOS are WebKit, including WebView.
export const isIOSWebKit = /*#__PURE__*/ once((): boolean => {
  return /iP(hone|od|ad)/.test(navigator.userAgent);
});

export const isSmoothScrollSupported = /*#__PURE__*/ once((): boolean => {
  return "scrollBehavior" in getDocumentRoot().style;
});
