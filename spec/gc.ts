// The react project runs with --expose-gc (vitest.config.ts), so the retention specs can force a collection.
const gc = (globalThis as { gc?: () => void }).gc;

/** A WeakRef clears no earlier than the end of the job that read it, so yield between passes. */
export const collectGarbage = async () => {
  if (!gc) {
    throw new Error("gc is not exposed: run with --expose-gc");
  }
  for (let pass = 0; pass < 3; pass++) {
    gc();
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
};
