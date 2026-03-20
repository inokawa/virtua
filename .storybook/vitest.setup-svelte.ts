// https://github.com/inokawa/virtua#what-is-resizeobserver-loop-completed-with-undelivered-notifications-error
const onError = (e: ErrorEvent) => {
  if (e.message.includes("ResizeObserver")) {
    e.stopImmediatePropagation();
  }
};
window.addEventListener("error", onError);
