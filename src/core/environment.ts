import { NULL } from "./utils.js";

/**
 * @internal
 */
export const isBrowser = typeof window !== "undefined";

/**
 * @internal
 */
export const getCurrentDocument = (node: HTMLElement): Document =>
  node.ownerDocument;

/**
 * @internal
 */
export const getCurrentWindow = (doc: Document) => doc.defaultView!;

let isIOS: boolean | undefined;

/**
 * Currently, all browsers on iOS/iPadOS are WebKit, including WebView.
 * @internal
 */
export const isIOSWebKit = (): boolean => {
  if (isIOS == NULL) {
    isIOS =
      /iP(hone|od|ad)/.test(navigator.userAgent) ||
      // Modern iPad detection (iPadOS 13+)
      // iPadOS 13+ reports the same userAgent/platform information as macOS, to enable desktop sites.
      // So we treat devices that have macOS like information but with touch support as iPadOS.
      // https://stackoverflow.com/questions/57776001/how-to-detect-ipad-pro-as-ipad-using-javascript
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0);
  }
  return isIOS;
};
