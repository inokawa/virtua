import { type Ref, useCallback, type RefObject } from "react";

/**
 * @internal
 * Merge multiple refs into a single ref callback.
 */
export function useMergeRefs<T>(...refs: Array<Ref<T> | undefined>): Ref<T> {
  return useCallback((instance: T | null) => {
    for (const ref of refs) {
      ref && updateRef(ref, instance);
    }
    // eslint-disable-next-line react-hooks/use-memo
  }, refs);
}

function updateRef<T>(ref: Ref<T>, instance: T | null): void {
  if (typeof ref === "function") {
    ref(instance);
  } else if (ref) {
    (ref as RefObject<T | null>).current = instance;
  }
}
