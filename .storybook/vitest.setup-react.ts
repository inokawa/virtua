import { setProjectAnnotations } from "@storybook/react-vite";
import * as projectAnnotations from "./preview";

// https://github.com/inokawa/virtua#what-is-resizeobserver-loop-completed-with-undelivered-notifications-error
const onError = (e: ErrorEvent) => {
  if (e.message.includes("ResizeObserver")) {
    e.stopImmediatePropagation();
  }
};
window.addEventListener("error", onError);

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([projectAnnotations]);
