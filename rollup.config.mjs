import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel";
import banner from "rollup-plugin-banner2";
import path from "node:path";
import pkg from "./package.json" with { type: "json" };
import vueJsx from "unplugin-vue-jsx/rollup";
import vueVNodePlugin from "./scripts/babel-plugin-annotate-vue-vnode.mjs";
import { svelteCopy } from "./scripts/rollup-plugin-svelte-copy.mjs";

const external = (id) =>
  [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ].some((d) => id.startsWith(d));

const terserPlugin = ({ vue } = {}) =>
  terser({
    ecma: 2018,
    module: true,
    compress: { passes: 5, unsafe: true, keep_fargs: false },
    mangle: {
      properties: {
        // @vue/babel-plugin-jsx may generate _ field
        regex: "^_.+",
        ...(vue && {
          // [Vue warn]: Invalid prop name: "$" is a reserved property.
          reserved: ["$"],
        }),
      },
    },
    format: {
      preserve_annotations: true,
    },
  });

const corePath = "./lib/core/index.js";

/** @type { import('rollup').RollupOptions[] } */
export default [
  // react and type
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: ".",
        declaration: true,
        exclude: ["**/*.{spec,stories}.*"],
      }),
      getBabelOutputPlugin({
        plugins: ["@babel/plugin-transform-react-pure-annotations"],
      }),
      terserPlugin(),
      banner(() => '"use client";\n'),
    ],
    external,
  },
  // vue
  {
    input: "src/vue/index.ts",
    output: [
      {
        file: pkg.exports["./vue"].default,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.exports["./vue"].import,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: ".",
        // declaration: true,
        exclude: ["**/*.{spec,stories}.*"],
        jsx: "preserve",
      }),
      vueJsx({ optimize: true }),
      getBabelOutputPlugin({
        plugins: [vueVNodePlugin],
      }),
      terserPlugin({ vue: true }),
    ],
    external,
  },
  // solid
  {
    input: "src/solid/index.ts",
    output: [
      {
        file: pkg.exports["./solid"].default,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.exports["./solid"].import,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: ".",
        // declaration: true,
        exclude: ["**/*.{spec,stories}.*"],
        jsx: "preserve",
      }),
      babel({
        babelrc: false,
        configFile: false,
        extensions: [".jsx", ".tsx"],
        babelHelpers: "bundled",
        presets: ["babel-preset-solid"],
        parserOpts: { sourceType: "module", plugins: ["jsx", "typescript"] },
      }),
      terserPlugin(),
    ],
    external,
  },
  // svelte
  {
    input: "src/core/index.ts",
    output: [
      {
        file: corePath,
        format: "esm",
        // sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: ".",
        // declaration: true,
        exclude: ["**/*.{spec,stories}.*"],
      }),
      terserPlugin(),
      svelteCopy({
        dir: path.dirname(pkg.exports["./svelte"].default),
        coreDts: path.join(path.dirname(corePath), "index.d.ts"),
      }),
    ],
    external,
  },
];
