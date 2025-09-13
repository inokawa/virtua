import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    clearMocks: true,
    projects: [
      {
        test: {
          name: "unit",
          root: "src",
          environment: "jsdom",
          // https://github.com/testing-library/vue-testing-library/issues/296
          globals: true,
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [
            process.env.STORYBOOK_VUE
              ? ".storybook/vitest.setup-vue.ts"
              : process.env.STORYBOOK_SOLID
              ? ".storybook/vitest.setup-solid.ts"
              : process.env.STORYBOOK_SVELTE
              ? ".storybook/vitest.setup-svelte.ts"
              : ".storybook/vitest.setup-react.ts",
          ],
        },
      },
    ],
  },
});
