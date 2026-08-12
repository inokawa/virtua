import { useEffect, useLayoutEffect } from "octane";
import { isBrowser } from "../core/index.js";

/**
 * @internal
 */
export const useIsomorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;
