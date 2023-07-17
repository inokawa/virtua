import { Children, ReactElement, ReactFragment, ReactNode } from "react";
import { exists } from "../core/utils";

export const refKey = "current";

export const flattenChildren = (children: ReactNode) => {
  const arr: (ReactElement | ReactFragment | string | number)[] = [];
  Children.forEach(children, (e) => {
    if (!exists(e) || typeof e === "boolean") {
      return;
    }
    arr.push(e);
  });
  return arr;
};
