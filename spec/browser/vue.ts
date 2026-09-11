import { onTestFinished } from "vitest";
import { createApp, type VNode } from "vue";
import { createDomRoot } from "./index.js";

export const render = (node: VNode) => {
  const root = createDomRoot(document);
  const app = createApp({ render: () => node });
  app.mount(root);
  onTestFinished(() => app.unmount());
  return root;
};
