import { onTestFinished } from "vitest";
import { createApp, type VNode } from "vue";
import { createRoot } from "./index.js";

export const render = (node: VNode) => {
  const root = createRoot(document);
  const app = createApp({ render: () => node });
  app.mount(root);
  onTestFinished(() => app.unmount());
  return root;
};
