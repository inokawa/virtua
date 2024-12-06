import { useEffect, useLayoutEffect } from "react";
import { isBrowser } from "../core";

/**
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * @internal
 */
export const useIsomorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;
