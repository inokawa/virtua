/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
  stories: process.env.STORYBOOK_VUE
    ? ["../stories/vue/**/*.stories.@(js|jsx|ts|tsx)"]
    : ["../stories/react/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-storysource"],
  framework: {
    name: process.env.STORYBOOK_VUE
      ? "@storybook/vue3-vite"
      : "@storybook/react-vite",
    options: {},
  },
};
