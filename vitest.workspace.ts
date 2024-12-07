import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      name: "test",
      root: "src",
      environment: "jsdom",
      clearMocks: true,
      // https://github.com/testing-library/vue-testing-library/issues/296
      globals: true,
    },
  },
  {
    test: {
      name: "bench",
      root: "stories/react/comparisons",
      browser: {
        provider: "playwright",
        name: "chromium",
        enabled: true,
        headless: true,
      },
    },
  },
]);
