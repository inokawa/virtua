import { vi, onTestFinished } from "vitest";
import { render as _render, cleanup } from "@solidjs/testing-library";

export const render = (...args: Parameters<typeof _render>) => {
  onTestFinished(cleanup);
  const res = _render(...args);
  vi.runAllTicks();
  return res;
};
