import { useRef } from "react";
import { refKey } from "./utils";

export const useStatic = <T>(init: () => T): T => {
  const ref = useRef<T>();
  return ref[refKey] || (ref[refKey] = init());
};
