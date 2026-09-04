import { defineConfig, type Plugin, type UserConfig, Visitor } from "vite";
import * as path from "node:path";
import { globSync, cpSync, mkdirSync } from "node:fs";
import dts from "vite-plugin-dts";
import solid from "vite-plugin-solid";
import vueJsx from "@vitejs/plugin-vue-jsx";
import angular from "@analogjs/vite-plugin-angular";
import pkg from "./package.json" with { type: "json" };

type BuildOptions = NonNullable<UserConfig["build"]>;
type TerserOptions = NonNullable<BuildOptions["terserOptions"]>;

const external = (id: string) =>
  [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {}),
  ].some((d) => id.startsWith(d));

const terserOptions = ({
  core,
  vue,
}: { core?: boolean; vue?: boolean } = {}): TerserOptions => ({
  ecma: 2018,
  module: true,
  safari10: false,
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
    beautify: true, // FIXME replace with prettier
    preserve_annotations: true,
  },
});

// annotate dynamicProps of createVNode for terser; renderChunk runs before vite:terser.
const annotateVueVNode = (): Plugin => ({
  name: "annotate-vue-vnode",
  renderChunk(code, _chunk, _opts, meta) {
    // Requires experimental.nativeMagicString for meta.magicString
    const s = meta.magicString!;
    new Visitor({
      CallExpression: (node) => {
        // matches aliased `_createVNode` in esm and `(0, vue.createVNode)` in cjs
        const callee = code.slice(node.callee.start, node.callee.end);
        if (!/(^|[.\s])_?createVNode$/.test(callee)) return;
        const dynamicProps = node.arguments[4];
        if (dynamicProps?.type !== "ArrayExpression") return;
        for (const el of dynamicProps.elements) {
          if (
            el?.type === "Literal" &&
            typeof el.value === "string" &&
            el.value.startsWith("_")
          ) {
            s.appendLeft(el.start, "/*#__KEY__*/");
          }
        }
      },
    }).visit(this.parse(code));
    if (!s.hasChanged()) return null;
    // the default map of `s` is line-level and barely survives the terser pass
    return {
      code: s.toString(),
      map: s.generateMap({ hires: true }).toString(),
    };
  },
});

const copySvelte = (dest: string): Plugin => ({
  name: "copy-svelte",
  writeBundle() {
    for (const file of globSync("src/svelte/**/*.svelte")) {
      const out = path.join(dest, path.relative("src/svelte", file));
      mkdirSync(path.dirname(out), { recursive: true });
      cpSync(file, out);
    }
  },
});

const cjsEsFileName = (format: string) =>
  format === "es" ? "index.js" : "index.cjs";

export default defineConfig(({ mode }): UserConfig => {
  const shared: BuildOptions = {
    target: "esnext",
    sourcemap: true,
    emptyOutDir: false, // lib is removed once by the build script
  };

  switch (mode) {
    // react and type
    case "react":
      return {
        oxc: { jsx: { runtime: "automatic", importSource: "react" } },
        build: {
          ...shared,
          outDir: "lib",
          lib: {
            entry: "src/index.ts",
            formats: ["es", "cjs"],
            fileName: cjsEsFileName,
          },
          rolldownOptions: {
            external,
            output: { postBanner: '"use client";\n' },
          },
          minify: "terser",
          terserOptions: terserOptions(),
        },
        plugins: [
          dts({
            tsconfigPath: "./tsconfig.json",
            include: ["src"],
            // angular d.ts are emitted by ngc with tsconfig.angular.build.json
            exclude: ["**/*.{spec,stories}.*", "src/angular"],
          }),
        ],
      };
    case "vue":
      return {
        oxc: { jsx: "preserve" },
        build: {
          ...shared,
          outDir: "lib/vue",
          lib: {
            entry: "src/vue/index.ts",
            formats: ["es", "cjs"],
            fileName: cjsEsFileName,
          },
          rolldownOptions: {
            external,
            experimental: { nativeMagicString: true },
          },
          minify: "terser",
          terserOptions: terserOptions({ vue: true }),
        },
        plugins: [vueJsx({ optimize: true }), annotateVueVNode()],
      };
    case "solid":
      return {
        oxc: { jsx: "preserve" },
        build: {
          ...shared,
          outDir: "lib/solid",
          lib: {
            entry: "src/solid/index.ts",
            formats: ["es", "cjs"],
            fileName: cjsEsFileName,
          },
          rolldownOptions: { external },
          minify: "terser",
          terserOptions: terserOptions(),
        },
        plugins: [solid()],
      };
    case "solid-ssr":
      return {
        // vite's oxc plugin can't emit JSX; let rolldown transform strip types and keep JSX
        oxc: false,
        build: {
          ...shared,
          outDir: "lib/solid",
          lib: {
            entry: "src/solid/index.ts",
            formats: ["es"],
            fileName: () => "index.jsx",
          },
          rolldownOptions: {
            external,
            transform: { jsx: "preserve" },
            treeshake: false,
            output: {
              // `build.minify: false` maps to rolldown's "dce-only", which drops the
              // `props._resizer` call in ListItem whose element ref is assigned only
              // in the preserved (uncompiled) JSX. Override it to disable DCE.
              minify: false,
              // drop @jsxImportSource pragmas, which warn when left in the middle of the bundle
              comments: { jsdoc: false },
            },
          },
          minify: false,
        },
      };
    case "core":
      return {
        build: {
          ...shared,
          outDir: "lib/core",
          lib: {
            entry: "src/core/index.ts",
            formats: ["es", "cjs"],
            fileName: cjsEsFileName,
          },
          rolldownOptions: { external },
          minify: "terser",
          terserOptions: terserOptions({ core: true }),
        },
      };
    case "svelte":
      return {
        build: {
          ...shared,
          outDir: "lib/svelte",
          lib: {
            entry: Object.fromEntries(
              globSync("src/svelte/**/{index,utils}.ts").map((file) => [
                path.relative(
                  "src/svelte",
                  file.slice(0, file.length - path.extname(file).length),
                ),
                file,
              ]),
            ),
            formats: ["es"],
            fileName: (_format: string, entryName: string) => `${entryName}.js`,
          },
          rolldownOptions: {
            external: (id: string) => external(id) || id.endsWith(".svelte"),
          },
          minify: false,
        },
        plugins: [copySvelte("lib/svelte")],
      };
    case "angular":
      return {
        build: {
          ...shared,
          outDir: "lib/angular",
          lib: {
            entry: "src/angular/index.ts",
            formats: ["es"],
            fileName: () => "index.js",
          },
          rolldownOptions: { external },
          minify: "terser",
          // Only _ prefixed fields are mangled, because $ prefixed ones of the
          // core are referenced from the templates, which are kept as strings
          // by the partial compilation and are not mangled with them.
          terserOptions: terserOptions({ core: true }),
        },
        plugins: [
          angular({
            tsconfig: "tsconfig.angular.json",
            jit: false,
            // emit linker-compatible partial-ivy declarations for publishing
            fastCompile: true,
            fastCompileMode: "partial",
          }),
        ],
      };
    default:
      throw new Error(`unknown build mode: ${mode}`);
  }
});
