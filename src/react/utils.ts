import { ReactElement } from "react";

export const refKey = "current";

export type VirtualizableElement = ReactElement | VirtualizableElement[];

const forEach = (e: VirtualizableElement, cb: (e: ReactElement) => void) => {
  if (Array.isArray(e)) {
    (e as VirtualizableElement[]).forEach((e) => {
      forEach(e, cb);
    });
  } else {
    cb(e as Exclude<VirtualizableElement, Array<any>>);
  }
};

// HACK: wip
export const flattenChildren = (
  children: VirtualizableElement
): ReactElement[] => {
  const elements: ReactElement[] = [];

  forEach(children, (e) => {
    elements.push(e);
  });
  return elements;
};

export type MayHaveKey = { key?: React.Key };
