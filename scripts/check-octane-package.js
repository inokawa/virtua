import { strict as assert } from "node:assert";
import {
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { gzipSync } from "node:zlib";
import { octane } from "octane/compiler/vite";
import ts from "typescript";
import { build } from "vite";

const projectRoot = resolve(import.meta.dirname, "..");
const clientEntry = join(projectRoot, "lib/octane/client/index.js");
const serverEntry = join(projectRoot, "lib/octane/server/index.js");
const typeEntry = join(projectRoot, "lib/octane/index.d.ts");
const reactEntry = join(projectRoot, "lib/index.js");

for (const file of [clientEntry, serverEntry, typeEntry]) {
  assert.doesNotThrow(
    () => readFileSync(file),
    `Missing Octane artifact: ${file}`,
  );
}

const clientSource = readFileSync(clientEntry, "utf8");
const serverSource = readFileSync(serverEntry, "utf8");
const declarations = readdirSync(join(projectRoot, "lib/octane"))
  .filter((entry) => entry.endsWith(".d.ts"))
  .map((entry) => readFileSync(join(projectRoot, "lib/octane", entry), "utf8"))
  .join("\n");
assert.doesNotMatch(clientSource, /["']react(?:-dom)?(?:\/[^"']*)?["']/);
assert.doesNotMatch(serverSource, /["']react(?:-dom)?(?:\/[^"']*)?["']/);
assert.doesNotMatch(serverSource, /from\s+["']octane["']/);
assert.doesNotMatch(declarations, /(?:from\s+["']react["']|@types\/react)/);
// Plain .ts custom hooks must receive compiler-generated slots, and .tsrx
// callers must scope each invocation through withSlot.
assert.match(clientSource, /hookSlots\s+as\s+\w+/);
assert.match(clientSource, /withSlot\s+as\s+\w+/);
assert.ok(
  (clientSource.match(/Symbol\(/g) ?? []).length >= 20,
  "Octane bundle is missing generated hook call-site slots",
);
// The marker line comment tells the consumer's octane compiler to skip hook
// re-slotting of these pre-compiled bundles. It must survive minification,
// so it is injected with postBanner (terser strips a plain banner).
const noSlotMarker = /\/\/\s*octane-no-slot\b/;
assert.match(
  clientSource,
  noSlotMarker,
  "octane-no-slot marker is missing from the client bundle",
);
assert.match(
  serverSource,
  noSlotMarker,
  "octane-no-slot marker is missing from the server bundle",
);

const octaneGzipSize = gzipSync(clientSource).byteLength;
const reactGzipSize = gzipSync(readFileSync(reactEntry)).byteLength;
assert.ok(
  octaneGzipSize <= reactGzipSize,
  `Octane bundle (${octaneGzipSize} B gzip) exceeds React (${reactGzipSize} B gzip)`,
);

const serverExports = await import("virtua/octane");
for (const name of ["VList", "Virtualizer", "WindowVirtualizer"]) {
  assert.equal(
    typeof serverExports[name],
    "function",
    `Missing ${name} export`,
  );
}

const temporaryRoot = mkdtempSync(join(projectRoot, ".octane-consumer-"));
try {
  const entry = join(temporaryRoot, "consumer.tsrx");
  const consumerSource = `import { VList, type VListHandle } from "virtua/octane";
const items = [{ id: 1, label: "one" }];
const listRef: { current: VListHandle | null } = { current: null };
export function Consumer() {
  return <VList ref={listRef} data={items}>{(item: { id: number; label: string }) => <div key={item.id}>{item.label}</div>}</VList>;
}
`;
  writeFileSync(entry, consumerSource);
  const typeFixture = join(temporaryRoot, "consumer.tsx");
  writeFileSync(typeFixture, consumerSource);

  const typeProgram = ts.createProgram([typeFixture], {
    jsx: ts.JsxEmit.ReactJSX,
    jsxImportSource: "octane",
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    noEmit: true,
    skipLibCheck: true,
    strict: true,
    target: ts.ScriptTarget.ESNext,
  });
  const diagnostics = ts.getPreEmitDiagnostics(typeProgram);
  assert.equal(
    diagnostics.length,
    0,
    ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCanonicalFileName: (file) => file,
      getCurrentDirectory: () => projectRoot,
      getNewLine: () => "\n",
    }),
  );

  await build({
    configFile: false,
    logLevel: "silent",
    plugins: [octane()],
    resolve: { extensions: [".tsrx", ".ts", ".mjs", ".js", ".json"] },
    build: {
      outDir: join(temporaryRoot, "dist"),
      lib: { entry, formats: ["es"], fileName: () => "consumer.js" },
      write: true,
    },
  });

  const bundle = readFileSync(join(temporaryRoot, "dist/consumer.js"), "utf8");
  assert.doesNotMatch(bundle, /["']react(?:-dom)?(?:\/[^"']*)?["']/);
} finally {
  rmSync(temporaryRoot, { force: true, recursive: true });
}
