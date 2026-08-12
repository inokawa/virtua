import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import ts from "typescript";

const projectRoot = resolve(import.meta.dirname, "..");
const sourceRoot = join(projectRoot, "src");
const checking = process.argv.includes("--check");
const temporaryRoot = mkdtempSync(join(tmpdir(), "virtua-octane-types-"));
const temporarySource = join(temporaryRoot, "src");
const temporaryOutput = join(temporaryRoot, "out");

const filesUnder = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  });

const replaceSpecifiers = (source, extension) =>
  source.replace(
    /(\b(?:from\s*|import\s*\(\s*)["'])(\.{1,2}\/[^"']+\.(?:tsrx|tsx))(["'])/g,
    (_match, before, specifier, after) =>
      `${before}${specifier.replace(/\.(?:tsrx|tsx)$/, extension)}${after}`,
  );

try {
  symlinkSync(
    join(projectRoot, "node_modules"),
    join(temporaryRoot, "node_modules"),
    "dir",
  );

  const sources = ["core", "octane"].flatMap((area) =>
    filesUnder(join(sourceRoot, area)).filter(
      (file) =>
        (file.endsWith(".ts") || file.endsWith(".tsrx")) &&
        !file.includes(".spec."),
    ),
  );

  for (const source of sources) {
    const sourcePath = relative(sourceRoot, source).replace(/\.tsrx$/, ".tsx");
    const destination = join(temporarySource, sourcePath);
    mkdirSync(dirname(destination), { recursive: true });
    writeFileSync(
      destination,
      replaceSpecifiers(readFileSync(source, "utf8"), ".tsx"),
    );
  }

  const roots = sources
    .filter((file) => file.startsWith(join(sourceRoot, "octane")))
    .map((file) =>
      join(
        temporarySource,
        relative(sourceRoot, file).replace(/\.tsrx$/, ".tsx"),
      ),
    );
  const program = ts.createProgram(roots, {
    declaration: true,
    emitDeclarationOnly: true,
    esModuleInterop: true,
    allowImportingTsExtensions: true,
    jsx: ts.JsxEmit.ReactJSX,
    jsxImportSource: "octane",
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    noEmit: checking,
    noUnusedLocals: true,
    noUnusedParameters: true,
    outDir: temporaryOutput,
    rootDir: temporarySource,
    skipLibCheck: true,
    strict: true,
    target: ts.ScriptTarget.ESNext,
    types: ["node"],
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length > 0) {
    throw new Error(
      ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCanonicalFileName: (file) => file,
        getCurrentDirectory: () => projectRoot,
        getNewLine: () => "\n",
      }),
    );
  }

  if (!checking) {
    const result = program.emit();
    if (result.emitSkipped)
      throw new Error("Octane declaration emit was skipped.");
    const generated = join(temporaryOutput, "octane");
    const destination = join(projectRoot, "lib", "octane");
    cpSync(generated, destination, { recursive: true });
    for (const entry of readdirSync(destination)) {
      if (!entry.endsWith(".d.ts")) continue;
      const file = join(destination, entry);
      writeFileSync(file, replaceSpecifiers(readFileSync(file, "utf8"), ".js"));
    }
  }
} finally {
  rmSync(temporaryRoot, { force: true, recursive: true });
}
