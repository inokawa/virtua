import { useCallback, useRef } from "react";

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { refKey } from "./utils";

export const useEvent = <T extends (...args: any[]) => void>(
  handler: T | undefined
) => {
  const handlerRef = useRef<T | undefined>(handler);

  useIsomorphicLayoutEffect(() => {
    handlerRef[refKey] = handler;
  });

  return useCallback((...args: Parameters<T>): void => {
    handlerRef[refKey] && handlerRef[refKey](...args);
  }, []);
};
