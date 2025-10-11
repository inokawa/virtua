import { once } from "./utils.js";

/**
 * @internal
 */
export const isBrowser = typeof window !== "undefined";

const getDocumentElement = () => document.documentElement;

/**
 * @internal
 */
export const getCurrentDocument = (node: HTMLElement): Document =>
  node.ownerDocument;

/**
 * @internal
 */
export const getCurrentWindow = (doc: Document) => doc.defaultView!;

/**
 * @internal
 */
export const isRTLDocument = /*#__PURE__*/ once((): boolean => {
  // TODO support SSR in rtl
  return isBrowser
    ? getComputedStyle(getDocumentElement()).direction === "rtl"
    : false;
});

/**
 * Currently, all browsers on iOS/iPadOS are WebKit, including WebView.
 * Note: iPadOS 13+ reports as 'MacIntel' to enable desktop sites,
 * so we need to check for touch support to distinguish from real Macs.
 * @internal
 */
export const isIOSWebKit = /*#__PURE__*/ once((): boolean => {
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
    return true;
  }
  // Modern iPad detection (iPadOS 13+)
  // iPad reports as 'MacIntel' but has touch support
  // https://stackoverflow.com/questions/57776001/how-to-detect-ipad-pro-as-ipad-using-javascript
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0;
});

/**
 * @internal
 */
export const isSmoothScrollSupported = /*#__PURE__*/ once((): boolean => {
  return "scrollBehavior" in getDocumentElement().style;
});
