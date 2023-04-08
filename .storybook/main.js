module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  async webpackFinal(config, options) {
    config.module.rules = config.module.rules.filter(
      (r) => !r.use?.[0]?.loader?.includes("babel-loader")
    );
    config.module.rules.unshift({
      test: /\.(mjs|tsx?|jsx?)$/,
      use: [
        {
          loader: "esbuild-loader",
          options: {
            target: "es2018",
            implementation: require("esbuild"),
          },
        },
      ],
    });
    return config;
  },
};
