import { vi } from "vitest";

// https://vitest.dev/api/vi.html#vi-usefaketimers
vi.useFakeTimers({ toFake: ["queueMicrotask"] });
