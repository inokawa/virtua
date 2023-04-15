import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import pkg from "./package.json" assert { type: "json" };

export default {
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
    terser({
      ecma: 2015,
      module: true,
      compress: { passes: 5, unsafe: true, keep_fargs: false },
      mangle: { properties: { regex: "^_" } },
      format: {
        // https://github.com/terser/terser/pull/550
        // https://github.com/terser/terser/issues/968
        comments: /@preserve|@lic|@cc_on|^\**!|__PURE__/i,
        preserve_annotations: true,
      },
    }),
  ],
  external: (id) =>
    [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.devDependencies),
    ].some((d) => id.startsWith(d)),
};
