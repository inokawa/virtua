import { onTestFinished } from "vitest";
import { type JSX } from "solid-js";
import { render as renderTo } from "solid-js/web";
import { createRoot } from "./index.js";

export const render = (node: () => JSX.Element) => {
  const root = createRoot(document);
  onTestFinished(renderTo(node, root));
  return root;
};
