import { vi } from "vitest";

// https://vitest.dev/api/vi.html#vi-usefaketimers
vi.useFakeTimers({ toFake: ["queueMicrotask"] });

// Shim jsdom's timer based requestAnimationFrame with microtask like the mocked ResizeObserver
global.requestAnimationFrame = (cb) => {
  queueMicrotask(() => cb(performance.now()));
  return 0;
};
