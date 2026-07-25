// ngc with tsconfig.angular.build.json also emits d.ts of imported files under
// src/core, which must not overwrite the ones emitted by vite-plugin-dts.
// Copy only the angular subtree to lib and discard the rest.
import { cpSync, rmSync } from "node:fs";

cpSync(".angular-dts/angular", "lib/angular", { recursive: true });
rmSync(".angular-dts", { recursive: true, force: true });
