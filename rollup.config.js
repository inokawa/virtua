import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const keys = (p) => Object.keys(p || {});

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
    terser({
      ecma: 2015,
      module: true,
      compress: { passes: 3, unsafe: true, keep_fargs: false },
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
    [...keys(pkg.dependencies), ...keys(pkg.devDependencies)].some((d) =>
      id.startsWith(d)
    ),
};
