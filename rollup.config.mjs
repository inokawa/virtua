import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel";
import banner from "rollup-plugin-banner2";
import pkg from "./package.json" assert { type: "json" };
import vueVNodePlugin from "./scripts/babel-plugin-annotate-vue-vnode.mjs";

const external = (id) =>
  [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ].some((d) => id.startsWith(d));

const terserPlugin = terser({
  ecma: 2018,
  module: true,
  compress: { passes: 5, unsafe: true, keep_fargs: false },
  mangle: {
    properties: {
      // @vue/babel-plugin-jsx may generate _ field
      regex: "^_.+",
    },
  },
  format: {
    preserve_annotations: true,
  },
});

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
      terserPlugin,
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
      babel({
        babelrc: false,
        configFile: false,
        extensions: [".jsx", ".tsx"],
        babelHelpers: "bundled",
        plugins: [["@vue/babel-plugin-jsx", { optimize: true }]],
        parserOpts: { sourceType: "module", plugins: ["jsx", "typescript"] },
      }),
      getBabelOutputPlugin({
        plugins: [vueVNodePlugin],
      }),
      terserPlugin,
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
      terserPlugin,
    ],
    external,
  },
];
