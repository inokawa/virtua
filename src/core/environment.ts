import { once } from "./utils";

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
 * @internal
 */
export const isIOSWebKit = /*#__PURE__*/ once((): boolean => {
  return /iP(hone|od|ad)/.test(navigator.userAgent);
});

/**
 * @internal
 */
export const isSmoothScrollSupported = /*#__PURE__*/ once((): boolean => {
  return "scrollBehavior" in getDocumentElement().style;
});
