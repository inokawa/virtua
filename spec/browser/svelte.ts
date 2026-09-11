import { onTestFinished } from "vitest";
import { mount, unmount, type Component } from "svelte";
import { createRoot } from "./index.js";

export const render = <P extends Record<string, unknown>>(
  component: Component<P, any>,
  props: P,
  style?: string,
) => {
  const root = createRoot(document);
  if (style) {
    root.style.cssText = style;
  }
  const app = mount(component, { target: root, props });
  onTestFinished(() => unmount(app));
  return root;
};
