import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import vueJsx from "@vitejs/plugin-vue-jsx";
import solid from "vite-plugin-solid";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import angular from "@analogjs/vite-plugin-angular";
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
          setupFiles: ["./spec/setup.ts"],
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
          setupFiles: ["./spec/setup.ts"],
        },
      },
      {
        plugins: [solid()],
        test: {
          name: "solid",
          dir: "src/solid",
          environment: "jsdom",
          setupFiles: ["./spec/setup.ts"],
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
        plugins: [svelte()],
        test: {
          name: "svelte",
          dir: "src/svelte",
          environment: "jsdom",
          setupFiles: ["./spec/setup.ts"],
        },
        resolve: {
          // Resolve svelte's client (browser) build so `mount` works in jsdom.
          // The SSR spec runs in the node environment and is unaffected.
          conditions: ["browser"],
        },
      },
      {
        plugins: [angular({ tsconfig: "tsconfig.angular.json" })],
        test: {
          name: "angular",
          dir: "src/angular",
          environment: "jsdom",
          setupFiles: ["./spec/setup.ts", "./spec/setup.angular.ts"],
          // @analogjs/vite-plugin-angular defaults to vmThreads, whose cjs/esm
          // interop can't load jsdom in the SSR spec. It's only needed for
          // zone.js/fakeAsync, and these tests are zoneless.
          pool: "threads",
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
        optimizeDeps: {
          // FIXME: SyntaxError: The requested module '/node_modules/aria-query/lib/index.js' does not provide an export named 'elementRoles'
          // Since storybook 10.5, its dep scan misses @testing-library/dom and
          // the cjs named exports of aria-query break in the browser. Prebundle
          // it explicitly, and remove this once storybook finds it again.
          include: ["@testing-library/dom"],
        },
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
            screenshotFailures: false,
          },
          setupFiles: [
            process.env.STORYBOOK_VUE
              ? ".storybook/vitest.setup-vue.ts"
              : process.env.STORYBOOK_SOLID
                ? ".storybook/vitest.setup-solid.ts"
                : process.env.STORYBOOK_SVELTE
                  ? ".storybook/vitest.setup-svelte.ts"
                  : process.env.STORYBOOK_ANGULAR
                    ? ".storybook/vitest.setup-angular.ts"
                    : ".storybook/vitest.setup-react.ts",
          ],
        },
      },
    ],
  },
});
