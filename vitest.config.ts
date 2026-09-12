import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import vueJsx from "@vitejs/plugin-vue-jsx";
import solid from "vite-plugin-solid";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import angular from "@analogjs/vite-plugin-angular";
import { playwright } from "@vitest/browser-playwright";
import type { BrowserCommandContext } from "vitest/node";
import type { SsrProps } from "./spec/browser/index.js";

type SsrEntry = { render: (props: SsrProps) => string | Promise<string> };

// Renders on the node side of vite, where the components can be compiled for the server
const ssrCommands = (entry: string) => ({
  ssrRender: async ({ project }: BrowserCommandContext, props: SsrProps) =>
    (await project.import<SsrEntry>(entry)).render(props),
});

// These waits finish within a frame or two, so the default 50ms interval dominates them.
const browserPoll = { poll: { timeout: 2000, interval: 10 } };

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
          setupFiles: ["./spec/jsdom/setup.ts"],
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
          setupFiles: ["./spec/jsdom/setup.ts"],
        },
      },
      {
        plugins: [solid()],
        test: {
          name: "solid",
          include: ["src/solid/**/!(*.browser).spec.tsx"],
          environment: "jsdom",
          setupFiles: ["./spec/jsdom/setup.ts"],
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
          setupFiles: ["./spec/jsdom/setup.ts"],
        },
        resolve: {
          // Resolve svelte's client build so `mount` works in jsdom
          conditions: ["browser"],
        },
      },
      {
        plugins: [angular({ tsconfig: "tsconfig.angular.json" })],
        test: {
          name: "angular",
          include: ["src/angular/**/!(*.browser).spec.ts"],
          environment: "jsdom",
          setupFiles: ["./spec/jsdom/setup.ts", "./spec/setup.angular.ts"],
        },
      },
      {
        plugins: [react()],
        test: {
          name: "browser-core",
          expect: browserPoll,
          include: ["src/*.browser.spec.tsx"],
          browser: testBrowser("chromium", "firefox", "webkit"),
        },
      },
      {
        plugins: [react()],
        test: {
          name: "browser-react",
          expect: browserPoll,
          include: ["src/react/*.browser.spec.tsx"],
          browser: {
            ...testBrowser("chromium"),
            commands: ssrCommands("/spec/ssr/react.tsx"),
          },
        },
      },
      {
        plugins: [vueJsx()],
        test: {
          name: "browser-vue",
          expect: browserPoll,
          include: ["src/vue/*.browser.spec.tsx"],
          browser: {
            ...testBrowser("chromium"),
            commands: ssrCommands("/spec/ssr/vue.tsx"),
          },
        },
      },
      {
        // ssr:true also makes the client build hydratable
        plugins: [solid({ ssr: true })],
        test: {
          name: "browser-solid",
          expect: browserPoll,
          include: ["src/solid/*.browser.spec.tsx"],
          browser: {
            ...testBrowser("chromium"),
            commands: ssrCommands("/spec/ssr/solid.tsx"),
          },
        },
      },
      {
        plugins: [svelte()],
        test: {
          name: "browser-svelte",
          expect: browserPoll,
          include: ["src/svelte/*.browser.spec.ts"],
          browser: {
            ...testBrowser("chromium"),
            commands: ssrCommands("/spec/ssr/svelte.svelte"),
          },
        },
      },
      {
        plugins: [angular({ tsconfig: "tsconfig.angular.json" })],
        test: {
          name: "browser-angular",
          expect: browserPoll,
          include: ["src/angular/*.browser.spec.ts"],
          setupFiles: ["./spec/setup.angular.ts"],
          browser: {
            ...testBrowser("chromium"),
            commands: ssrCommands("/spec/ssr/angular.ts"),
          },
        },
      },
    ],
  },
});
