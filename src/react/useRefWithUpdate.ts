import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { refKey } from "./utils";

export const useRefWithUpdate = <T>(value: T) => {
  const ref = useRef<T>(value);

  useIsomorphicLayoutEffect(() => {
    ref[refKey] = value;
  }, [value]);

  return ref;
};
