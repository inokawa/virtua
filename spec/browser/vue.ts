import { onTestFinished } from "vitest";
import { createApp, type VNode } from "vue";
import { createContainer } from "./index.js";

export const render = (node: VNode) => {
  const container = createContainer(document);
  const app = createApp({ render: () => node });
  app.mount(container);
  onTestFinished(() => app.unmount());
  return container;
};
