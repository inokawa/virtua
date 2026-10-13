import { useRef } from "react";

/**
 * @internal
 */
export const useStatic = <T>(init: () => T): T => {
  const ref = useRef<T>(null);
  // eslint-disable-next-line react-hooks/refs
  return ref.current || (ref.current = init());
};
