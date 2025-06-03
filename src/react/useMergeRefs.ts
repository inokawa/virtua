import { Ref, MutableRefObject, useCallback } from "react";

export function useMergeRefs<T>(...refs: Array<Ref<T> | undefined>): Ref<T> {
  return useCallback((instance: T | null) => {
    for (const ref of refs) {
      ref && updateRef(ref, instance);
    }
  }, refs);
}

function updateRef<T>(ref: Ref<T>, instance: T | null): void {
  if (typeof ref === "function") {
    ref(instance);
  } else if (ref) {
    (ref as MutableRefObject<T | null>).current = instance;
  }
}
