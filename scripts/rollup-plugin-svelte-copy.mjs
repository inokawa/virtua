import { basename, extname, join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { svelte2tsx } from "svelte2tsx";
import { globSync } from "node:fs";
import ts from "typescript";
import tsconfig from "../tsconfig.json" with { type: "json" };

/**
 * @type { (arg:{dir:string}) => import('rollup').InputPluginOption }
 */
export const svelteCopy = ({ dir, coreDts }) => {
  const require = createRequire(import.meta.url);

  const svelteShimsPath = require.resolve("svelte2tsx/svelte-shims-v4.d.ts");

  const { options: compilerOptions } = ts.convertCompilerOptionsFromJson(
    tsconfig.compilerOptions,
    "."
  );

  return {
    name: "svelte-copy",
    buildEnd: () => {
      writeFileSync(coreDts, "// @ts-nocheck\n" + readFileSync(coreDts));

      const svelteCodes = [];

      for (const filename of globSync("./src/svelte/*")) {
        if (filename.endsWith(".svelte")) {
          const code = readFileSync(filename, "utf8");
          writeFileSync(join(dir, basename(filename)), code);

          // https://github.com/sveltejs/kit/blob/32c0acc373bfcd22ef1c544af25950a91c5c30a9/packages/package/src/typescript.js#L30-L36
          // https://github.com/sveltejs/language-tools/blob/9d7907ef8b65efeda2698f61490b964d2f1a7069/packages/svelte2tsx/src/emitDts.ts#L249-L256
          const svelteTsx = svelte2tsx(code, {
            filename,
            isTsFile: true,
            mode: "dts",
            noSvelteComponentTyped: true,
          });
          svelteCodes.push({
            filename,
            code: svelteTsx.code,
          });
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

      // https://github.com/sveltejs/language-tools/blob/9d7907ef8b65efeda2698f61490b964d2f1a7069/packages/svelte2tsx/src/emitDts.ts#L11-L17
      // https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#getting-the-dts-from-a-javascript-file
      const createdFiles = {};
      const getAbsolutePath = (p) => join(process.cwd(), p);
      const dummyPathToCode = new Map();
      svelteCodes.forEach(({ filename, code }) => {
        dummyPathToCode.set(getAbsolutePath(filename) + ".ts", code);
      });

      const host = ts.createCompilerHost(compilerOptions);
      host.readFile = (path, encoding = "utf-8") => {
        if (dummyPathToCode.has(path)) {
          return dummyPathToCode.get(path);
        }
        return ts.sys.readFile(path, encoding);
      };
      host.writeFile = (fileName, contents) => {
        createdFiles[fileName] = contents;
      };

      const program = ts.createProgram(
        [...dummyPathToCode.keys(), svelteShimsPath],
        {
          ...compilerOptions,
          noEmit: false,
          declaration: true,
          emitDeclarationOnly: true,
        },
        host
      );
      program.emit();
      svelteCodes.forEach(({ filename }) => {
        writeFileSync(
          join(dir, basename(filename) + ".d.ts"),
          createdFiles[getAbsolutePath(filename) + ".d.ts"]
        );
      });
    },
  };
};
