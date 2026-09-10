import { onTestFinished } from "vitest";
import { type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { createContainer } from "./index.js";

export const render = (node: ReactNode, doc: Document = document) => {
  const container = createContainer(doc);
  const root = createRoot(container);
  root.render(node);
  onTestFinished(() => root.unmount());
  return container;
};
