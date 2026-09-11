import { onTestFinished } from "vitest";
import { type JSX } from "solid-js";
import { render as renderTo } from "solid-js/web";
import { createDomRoot } from "./index.js";

export const render = (node: () => JSX.Element) => {
  const root = createDomRoot(document);
  onTestFinished(renderTo(node, root));
  return root;
};
