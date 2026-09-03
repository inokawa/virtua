import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import vueJsx from "@vitejs/plugin-vue-jsx";
import solid from "vite-plugin-solid";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import angular from "@analogjs/vite-plugin-angular";
import { playwright } from "@vitest/browser-playwright";

const testBrowser = (...browsers: ("chromium" | "firefox" | "webkit")[]) => ({
  enabled: true,
  headless: true,
  provider: playwright(),
  instances: browsers.map((browser) => ({ browser })),
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
          include: ["src/react/**/!(*.browser).spec.tsx"],
          environment: "jsdom",
          setupFiles: ["./spec/setup.ts"],
        },
      },
      {
        plugins: [vueJsx()],
        test: {
          name: "vue",
          include: ["src/vue/**/!(*.browser).spec.ts"],
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
          include: ["src/solid/**/!(*.browser).spec.tsx"],
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
          include: ["src/svelte/**/!(*.browser).spec.ts"],
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
          include: ["src/angular/**/!(*.browser).spec.ts"],
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
          include: ["src/react/*.browser.spec.tsx"],
          browser: testBrowser("chromium"),
        },
      },
      {
        plugins: [vueJsx()],
        test: {
          name: "browser-vue",
          include: ["src/vue/*.browser.spec.tsx"],
          browser: testBrowser("chromium"),
        },
      },
      {
        plugins: [solid()],
        test: {
          name: "browser-solid",
          include: ["src/solid/*.browser.spec.tsx"],
          browser: testBrowser("chromium"),
        },
      },
      {
        plugins: [svelte()],
        test: {
          name: "browser-svelte",
          include: ["src/svelte/*.browser.spec.ts"],
          browser: testBrowser("chromium"),
        },
      },
      {
        plugins: [angular({ tsconfig: "tsconfig.angular.json" })],
        test: {
          name: "browser-angular",
          include: ["src/angular/*.browser.spec.ts"],
          setupFiles: ["./spec/setup.angular.ts"],
          browser: testBrowser("chromium"),
        },
      },
      {
        plugins: [react()],
        test: {
          name: "browser-quirk",
          include: ["src/*.browser.spec.tsx"],
          browser: testBrowser("chromium", "firefox", "webkit"),
        },
      },
    ],
  },
});
