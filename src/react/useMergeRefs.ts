import { type Ref, useCallback } from "react";

/**
 * @internal
 */
export const useMergeRefs = <T>(
  refs: readonly (Ref<T> | undefined)[],
): Ref<T> => {
  return useCallback((instance: T | null) => {
    for (const ref of refs) {
      if (ref) {
        if (typeof ref === "function") {
          ref(instance);
        } else if (ref) {
          ref.current = instance;
        }
      }
    }
    // eslint-disable-next-line react-hooks/use-memo
  }, refs);
};
