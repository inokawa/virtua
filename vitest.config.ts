import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import vueJsx from "@vitejs/plugin-vue-jsx";
import solid from "vite-plugin-solid";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import angular from "@analogjs/vite-plugin-angular";
import { playwright } from "@vitest/browser-playwright";

const smokeBrowser = () => ({
  enabled: true,
  headless: true,
  provider: playwright(),
  instances: [{ browser: "chromium" as const }],
  screenshotFailures: false,
});

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
        plugins: [react()],
        test: {
          name: "browser-react",
          include: ["spec/browser/react.spec.tsx"],
          browser: smokeBrowser(),
        },
      },
      {
        plugins: [vueJsx()],
        test: {
          name: "browser-vue",
          include: ["spec/browser/vue.spec.tsx"],
          browser: smokeBrowser(),
        },
      },
      {
        plugins: [solid()],
        test: {
          name: "browser-solid",
          include: ["spec/browser/solid.spec.tsx"],
          browser: smokeBrowser(),
        },
      },
      {
        plugins: [svelte()],
        test: {
          name: "browser-svelte",
          include: ["spec/browser/svelte.spec.ts"],
          browser: smokeBrowser(),
        },
      },
      {
        plugins: [
          angular({
            tsconfig: "tsconfig.angular.json",
            include: ["/spec/browser/angular.spec.ts"],
          }),
        ],
        test: {
          name: "browser-angular",
          include: ["spec/browser/angular.spec.ts"],
          setupFiles: ["./spec/setup.angular.ts"],
          browser: smokeBrowser(),
        },
      },
    ],
  },
});
