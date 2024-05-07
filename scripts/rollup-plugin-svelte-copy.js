import { basename, extname, join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";
import ts from "typescript";
import tsconfig from "../tsconfig.json" with { type: "json" };

/**
 * @type { (arg:{dir:string}) => import('rollup').InputPluginOption }
 */
export const svelteCopy = ({ dir, coreDts }) => {
  const { options: compilerOptions } = ts.convertCompilerOptionsFromJson(
    tsconfig.compilerOptions,
    "."
  );

  return {
    name: "svelte-copy",
    buildEnd: () => {
      writeFileSync(coreDts, "// @ts-nocheck\n" + readFileSync(coreDts));

      for (const filename of globSync("./src/svelte/*")) {
        if (filename.endsWith(".svelte")) {
          const code = readFileSync(filename, "utf8");
          writeFileSync(join(dir, basename(filename)), code);
        } else if (filename.endsWith(".ts")) {
          const code = readFileSync(filename, "utf8");
          const jsCode = ts.transpile(code, compilerOptions);
          writeFileSync(
            join(dir, basename(filename, extname(filename)) + ".js"),
            jsCode
          );
        } else {
          throw new Error("unknown extension: " + filename);
        }
      }
    },
  };
};
