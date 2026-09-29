import { vi, onTestFinished } from "vitest";
import { render as _render, cleanup } from "@testing-library/svelte";
import { delay } from "../utils.js";

export const renderSync = (...args: Parameters<typeof _render>) => {
  onTestFinished(cleanup);
  return _render(...args);
};

export const render = async (...args: Parameters<typeof _render>) => {
  onTestFinished(cleanup);
  const res = _render(...args);
  let same = false;
  let prev = res.baseElement.innerHTML;
  while (true) {
    vi.runAllTicks();
    await delay(50);
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
