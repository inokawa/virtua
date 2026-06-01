import { vi } from "vitest";
import { render as _render } from "@testing-library/react";

export const render = async (...args: Parameters<typeof _render>) => {
  const res = _render(...args);
  let same = false;
  let prev = res.baseElement.innerHTML;
  while (true) {
    vi.runAllTicks();
    await new Promise((resolve) => setTimeout(resolve, 50));
    const current = res.baseElement.innerHTML;
    if (prev === current) {
      if (same) {
        break;
      } else {
        same = true;
      }
    } else {
      same = false;
    }
    prev = current;
  }
  return res;
};
