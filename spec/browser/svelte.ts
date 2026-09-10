import { onTestFinished } from "vitest";
import { mount, unmount, type Component } from "svelte";
import { createContainer } from "./index.js";

export const render = <P extends Record<string, unknown>>(
  component: Component<P, any>,
  props: P,
  style?: string,
) => {
  const container = createContainer(document);
  if (style) {
    container.style.cssText = style;
  }
  const app = mount(component, { target: container, props });
  onTestFinished(() => unmount(app));
  return container;
};
