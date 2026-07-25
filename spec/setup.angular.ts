// JIT compilation of inline templates in specs
import "@angular/compiler";
import { setupTestBed } from "@analogjs/vitest-angular/setup-testbed";

// The SSR spec runs in the node environment and bootstraps the server platform.
// TestBed would install the browser DOM adapter, which wins over domino's.
if (typeof document !== "undefined") {
  // zoneless by default
  setupTestBed();
}
