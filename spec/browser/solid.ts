import { onTestFinished } from "vitest";
import { type JSX, render as renderTo } from "@solidjs/web";
import { createDomRoot } from "./index.js";

export const render = (node: () => JSX.Element) => {
  const root = createDomRoot(document);
  onTestFinished(renderTo(node, root));
  return root;
};
