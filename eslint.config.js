import tseslint from "typescript-eslint";
import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginVue from "eslint-plugin-vue";
import solid from "eslint-plugin-solid/configs/typescript";

const languageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    projectService: {
      allowDefaultProject: ["e2e/*"],
    },
    tsconfigRootDir: import.meta.dirname,
  },
};

export default [
  {
    files: ["e2e/**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions,
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions,
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
    plugins: {
      import: pluginImport,
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
              from: ["./src/!(core|react)/**/*", "./src/core/!(index.ts)"],
            },
            {
              target: ["./src/solid/**/*"],
              from: ["./src/!(core|solid)/**/*", "./src/core/!(index.ts)"],
            },
            {
              target: ["./src/svelte/**/*"],
              from: ["./src/!(core|svelte)/**/*", "./src/core/!(index.ts)"],
            },
            {
              target: ["./src/vue/**/*"],
              from: ["./src/!(core|vue)/**/*", "./src/core/!(index.ts)"],
            },
          ],
        },
      ],
    },
  },
  ...[
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
    pluginReactHooks.configs.flat.recommended,
    {
      rules: {
        "react/display-name": "off",
      },
    },
  ].map((c) => ({
    ...c,
    files: ["src/react/**/*.{js,jsx,ts,tsx}"],
    languageOptions,
    settings: {
      react: {
        version: "detect",
      },
    },
  })),
  ...[
    ...pluginVue.configs["flat/recommended"],
    {
      rules: {
        "vue/no-setup-props-reactivity-loss": "warn",
        "vue/no-ref-object-reactivity-loss": "error",
        "vue/multi-word-component-names": "off",
      },
    },
  ].map((c) => ({
    //  https://github.com/vuejs/vue-eslint-parser/issues/232
    ...c,
    files: ["src/vue/**/*.{js,jsx,ts,tsx}"],
    languageOptions,
  })),
  {
    files: ["src/solid/**/*.{js,jsx,ts,tsx}"],
    languageOptions,
    ...solid,
  },
];
