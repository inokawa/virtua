import { mergeConfig } from "vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
export default process.env.STORYBOOK_VUE
  ? {
      stories: ["../stories/vue/**/*.stories.@(js|jsx|ts|tsx)"],
      addons: ["@storybook/addon-storysource"],
      framework: {
        name: "@storybook/vue3-vite",
        options: {},
      },
      viteFinal: async (config) => {
        const { default: vueJsx } = await import("@vitejs/plugin-vue-jsx");

        return mergeConfig(config, {
          plugins: [vueJsx()],
        });
      },
    }
  : {
      stories: ["../stories/react/**/*.stories.@(js|jsx|ts|tsx)"],
      addons: ["@storybook/addon-storysource"],
      framework: {
        name: "@storybook/react-vite",
        options: {},
      },
    };
