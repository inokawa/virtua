import { useRef } from "react";
import { refKey } from "./utils.js";

/**
 * @internal
 */
export const useStatic = <T>(init: () => T): T => {
  const ref = useRef<T>(null);
  // eslint-disable-next-line react-hooks/refs
  return ref[refKey] || (ref[refKey] = init());
};
