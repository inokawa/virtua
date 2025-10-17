import { mergeConfig } from "vite";
import * as path from "node:path";

/** @type { import('@storybook/react-vite').StorybookConfig } */
export default process.env.STORYBOOK_VUE
  ? {
    stories: ["../stories/vue/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-docs", "@storybook/addon-vitest"],
    framework: {
      name: "@storybook/vue3-vite",
      options: {},
    },
    viteFinal: async (config) => {
      const { default: vue } = await import("@vitejs/plugin-vue");

      return mergeConfig(config, {
        plugins: [vue()],
      });
    },
  }
  : process.env.STORYBOOK_SOLID
    ? {
      stories: ["../stories/solid/**/*.stories.@(js|jsx|ts|tsx)"],
      addons: ["@storybook/addon-docs", "@storybook/addon-vitest"],
      framework: {
        name: "storybook-solidjs-vite",
        options: {},
      },
    }
    : process.env.STORYBOOK_SVELTE
      ? {
        stories: ["../stories/svelte/**/*.stories.@(js|jsx|ts|tsx)"],
        addons: ["@storybook/addon-docs", "@storybook/addon-vitest"],
        framework: {
          name: "@storybook/svelte-vite",
          options: {
            // FIXME: [storybook:svelte-docgen-plugin] Expression expected
            docgen: false,
          },
        },
        viteFinal: async (config) => {
          const { svelte, vitePreprocess } = await import(
            "@sveltejs/vite-plugin-svelte"
          );

          return mergeConfig(config, {
            plugins: [svelte({ preprocess: vitePreprocess() })],
          });
        },
      }
      : {
        stories: ["../stories/react/**/*.stories.@(js|jsx|ts|tsx)"],
        addons: ["@storybook/addon-docs", "@storybook/addon-vitest"],
        framework: {
          name: "@storybook/react-vite",
          options: {},
        },
        viteFinal: async (config) => {
          const { default: react } = await import("@vitejs/plugin-react");

          return mergeConfig(config, {
            plugins: [react()],
            // FIXME: ✘ [ERROR] Failed to resolve entry for package "virtua". The package may have incorrect main/module/exports specified in its package.json. [plugin vite:dep-scan]
            resolve: {
              alias: {
                virtua: path.resolve(__dirname, "../node_modules/virtua"),
              },
            },
          });
        },
        ...(process.env.STORYBOOK_DEPLOY && {
          refs: {
            vue: {
              title: "Vue",
              url: "/virtua/vue",
            },
            solid: {
              title: "Solid",
              url: "/virtua/solid",
            },
            svelte: {
              title: "Svelte",
              url: "/virtua/svelte",
            },
          },
        }),
      };
