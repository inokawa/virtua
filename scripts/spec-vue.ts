import { vi } from "vitest";
import { render as _render } from "@testing-library/vue";

export const render = (...args: Parameters<typeof _render>) => {
  const res = _render(...args);
  vi.runAllTicks();
  return res;
};
