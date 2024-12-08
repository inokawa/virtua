import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "src",
    environment: "jsdom",
    clearMocks: true,
    // https://github.com/testing-library/vue-testing-library/issues/296
    globals: true,
  },
});
