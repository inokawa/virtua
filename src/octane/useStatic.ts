import { useRef } from "octane";
import { refKey } from "./utils.js";

/**
 * @internal
 */
export const useStatic = <T>(init: () => T): T => {
  const ref = useRef<T | null>(null);
  return ref[refKey] || (ref[refKey] = init());
};
