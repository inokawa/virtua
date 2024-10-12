import { fixupPluginRules } from "@eslint/compat";
import typescriptEslintParser from "@typescript-eslint/parser";
import pluginImport from "eslint-plugin-import";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactCompiler from "eslint-plugin-react-compiler";
import pluginVue from "eslint-plugin-vue";
import solid from "eslint-plugin-solid/configs/typescript";

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};
const languageOptions = {
  parser: typescriptEslintParser,
  parserOptions,
};

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions,
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
    plugins: {
      // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-2272395246
      import: fixupPluginRules(pluginImport),
    },
    rules: {
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: ["./src/core/**/*"],
              from: ["./src/!(core)/**/*"],
            },
            {
              target: ["./src/react/**/*"],
              from: ["./src/!(core|react)/**/*"],
            },
            {
              target: ["./src/solid/**/*"],
              from: ["./src/!(core|solid)/**/*"],
            },
            {
              target: ["./src/svelte/**/*"],
              from: ["./src/!(core|svelte)/**/*"],
            },
            {
              target: ["./src/vue/**/*"],
              from: ["./src/!(core|vue)/**/*"],
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/react/**/*.{js,jsx,ts,tsx}"],
    languageOptions,
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-compiler": pluginReactCompiler,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react-compiler/react-compiler": "error",
    },
  },
  ...[
    ...pluginVue.configs["flat/recommended"],
    {
      rules: {
        "vue/no-setup-props-reactivity-loss": "warn",
        "vue/no-ref-object-reactivity-loss": "error",
      },
    },
  ].map((c) => ({
    //  https://github.com/vuejs/vue-eslint-parser/issues/232
    ...c,
    files: ["src/vue/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions,
    },
  })),
  {
    files: ["src/solid/**/*.{js,jsx,ts,tsx}"],
    languageOptions,
    ...solid,
  },
];
