/** @type { import('@storybook/react-vite').StorybookConfig } */
export default process.env.STORYBOOK_VUE
  ? {
      stories: ["../stories/vue/**/*.stories.@(js|jsx|ts|tsx)"],
      framework: {
        name: "@storybook/vue3-vite",
        options: {},
      },
      viteFinal: async (config) => {
        // https://github.com/storybookjs/storybook/issues/26291#issuecomment-1978193283
        const { mergeConfig } = await import("vite");

        const { default: vue } = await import("@vitejs/plugin-vue");
        const { default: vueJsx } = await import("@vitejs/plugin-vue-jsx");

        return mergeConfig(config, {
          plugins: [vue(), vueJsx({ optimize: true })],
        });
      },
    }
  : process.env.STORYBOOK_SOLID
    ? {
        stories: ["../stories/solid/**/*.stories.@(js|jsx|ts|tsx)"],
        framework: {
          name: "storybook-solidjs-vite",
          options: {},
        },
      }
    : process.env.STORYBOOK_SVELTE
      ? {
          stories: ["../stories/svelte/**/*.stories.@(js|jsx|ts|tsx)"],
          framework: {
            name: "@storybook/svelte-vite",
            options: {},
          },
          viteFinal: async (config) => {
            // https://github.com/storybookjs/storybook/issues/26291#issuecomment-1978193283
            const { mergeConfig } = await import("vite");

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
          framework: {
            name: "@storybook/react-vite",
            options: {},
          },
          viteFinal: async (config) => {
            // https://github.com/storybookjs/storybook/issues/26291#issuecomment-1978193283
            const { mergeConfig } = await import("vite");

            const { default: react } = await import("@vitejs/plugin-react");

            return mergeConfig(config, {
              plugins: [react()],
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
