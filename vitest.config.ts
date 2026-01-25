import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import vueJsx from "@vitejs/plugin-vue-jsx";
import solid from "vite-plugin-solid";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    clearMocks: true,
    projects: [
      {
        test: {
          name: "unit",
          dir: "src/core",
          environment: "node",
        },
      },
      {
        plugins: [react()],
        test: {
          name: "react",
          dir: "src/react",
          environment: "jsdom",
          setupFiles: ["./scripts/spec-setup.ts"],
        },
      },
      {
        plugins: [vueJsx()],
        test: {
          name: "vue",
          dir: "src/vue",
          environment: "jsdom",
          // https://github.com/testing-library/vue-testing-library/issues/296
          globals: true,
          setupFiles: ["./scripts/spec-setup.ts"],
        },
      },
      {
        plugins: [solid()],
        test: {
          name: "solid",
          dir: "src/solid",
          environment: "jsdom",
          setupFiles: ["./scripts/spec-setup.ts"],
          server: {
            deps: {
              // https://github.com/solidjs/vite-plugin-solid/issues/102#issuecomment-2363242031
              inline: true,
            },
          },
        },
        resolve: {
          conditions: ["development", "browser"],
        },
      },
      {
        plugins: [svelte({ hot: !process.env.VITEST })],
        test: {
          name: "svelte",
          dir: "src/svelte",
          environment: "jsdom",
          setupFiles: ["./scripts/spec-setup.ts"],
        },
        resolve: {
          conditions: ["development", "browser"],
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
            provider: playwright(),
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
