import { onTestFinished } from "vitest";
import { type JSX } from "solid-js";
import { render as renderTo } from "solid-js/web";
import { createContainer } from "./index.js";

export const render = (node: () => JSX.Element) => {
  const container = createContainer(document);
  onTestFinished(renderTo(node, container));
  return container;
};
