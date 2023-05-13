import { mergeConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        legacy({
          targets: ['Edge >= 18'],
        }),
      ],
    });
  },
};
