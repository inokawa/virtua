import { ReactNode } from "react";
import { exists } from "../core/utils";

export const refKey = "current";

export const isInvalidElement = <T extends ReactNode>(
  e: T
): e is Extract<T, null | undefined | boolean> =>
  !exists(e) || typeof e === "boolean";
