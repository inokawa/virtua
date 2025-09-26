import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import { refKey } from "./utils.js";

/**
 * @internal
 */
export const useLatestRef = <T>(value: T) => {
  const ref = useRef<T>(value);

  useIsomorphicLayoutEffect(() => {
    ref[refKey] = value;
  }, [value]);

  return ref;
};
