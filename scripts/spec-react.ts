import { vi } from "vitest";
import { render as _render } from "@testing-library/react";

export const render = (...args: Parameters<typeof _render>) => {
  const res = _render(...args);
  vi.runAllTicks();
  return res;
};
