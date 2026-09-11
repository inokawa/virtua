import { onTestFinished } from "vitest";
import { type ReactNode } from "react";
import { createRoot as createReactRoot } from "react-dom/client";
import { createDomRoot } from "./index.js";

export const render = (node: ReactNode, doc: Document = document) => {
  const root = createDomRoot(doc);
  const reactRoot = createReactRoot(root);
  reactRoot.render(node);
  onTestFinished(() => reactRoot.unmount());
  return root;
};
