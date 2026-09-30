import { onTestFinished } from "vitest";
import { type ReactNode } from "react";
import { createRoot as createReactRoot, type Root } from "react-dom/client";
import { createDomRoot } from "./index.js";

const reactRoots = new WeakMap<HTMLElement, Root>();

export const render = (node: ReactNode, doc: Document = document) => {
  const root = createDomRoot(doc);
  const reactRoot = createReactRoot(root);
  reactRoots.set(root, reactRoot);
  reactRoot.render(node);
  onTestFinished(() => reactRoot.unmount());
  return root;
};

export const rerender = (root: HTMLElement, node: ReactNode) => {
  reactRoots.get(root)!.render(node);
};
