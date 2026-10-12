/// <reference types="node" />
import v8 from "node:v8";
import vm from "node:vm";

// Real GC for retention tests; V8 flags are process-wide, so never flip it back.
v8.setFlagsFromString("--expose-gc");
const gc = vm.runInNewContext("gc") as () => void;

/** A WeakRef clears no earlier than the end of the job that read it, so yield between passes. */
export const collectGarbage = async () => {
  for (let pass = 0; pass < 5; pass++) {
    gc();
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
};
