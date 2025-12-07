import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel";
import banner from "rollup-plugin-banner2";
import copy from 'rollup-plugin-copy'
import * as path from "node:path";
import { globSync } from "node:fs";
import { fileURLToPath } from "node:url";
import pkg from "./package.json" with { type: "json" };
import vueJsx from "unplugin-vue-jsx/rollup";
import vueVNodePlugin from "./scripts/babel-plugin-annotate-vue-vnode.js";
import { coreTsNoCheck } from "./scripts/rollup-plugin-core-ts-nocheck.js";

const external = (id) =>
  [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ].some((d) => id.startsWith(d));

const terserPlugin = ({ core, vue } = {}) =>
  terser({
    ecma: 2018,
    module: true,
    compress: { passes: 5, unsafe: true, keep_fargs: false },
    mangle: {
      properties: {
        // @vue/babel-plugin-jsx may generate _ field
        regex: core ? "^_.+" : "^[$_].+",
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
        declarationDir: path.dirname(pkg.types),
        exclude: ["**/*.{spec,stories}.*"],
        jsx: 'react-jsx',
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
        file: pkg.exports["./vue"].require,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.exports["./vue"].default,
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
        file: pkg.exports["./solid"].require,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.exports["./solid"].default,
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
  // solid (for SSR)
  {
    input: "src/solid/index.ts",
    output: [
      {
        file: pkg.exports["./solid"].solid,
        format: "es",
        sourcemap: true,
      },
    ],
    jsx: "preserve",
    // FIXME: props._resizer call inside ListItem is unexpectedly treeshaked by rollup.
    treeshake: false,
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: ".",
        // declaration: true,
        exclude: ["**/*.{spec,stories}.*"],
      }),
      // terserPlugin(),
    ],
    external,
  },
  // core
  {
    input: "src/core/index.ts",
    output: [
      {
        file: pkg.exports["./unstable_core"].require,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.exports["./unstable_core"].default,
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
      }),
      terserPlugin({ core: true }),
      coreTsNoCheck({
        coreDts: path.join(
          path.dirname(pkg.exports["./unstable_core"].default),
          "index.d.ts"
        ),
      }),
    ],
    external,
  },
  // svelte
  {
    // https://rollupjs.org/configuration-options/#input
    input: Object.fromEntries(globSync('src/svelte/**/{index,utils}.ts').map((file) => [
      path.relative('src/svelte', file.slice(0, file.length - path.extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url)),
    ])),
    output: [
      {
        dir: path.dirname(pkg.exports["./svelte"].default),
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: path.dirname(pkg.exports["./svelte"].default),
        // declaration: true,
        exclude: ["**/*.{spec,stories}.*"],
      }),
      copy({
        targets: [{
          src: 'src/svelte/**/*.svelte', dest: path.dirname(pkg.exports["./svelte"].default),
        }],
        hook: 'writeBundle',
      }),
    ],
    external: (id) => external(id) || id.endsWith('.svelte'),
  },
];
