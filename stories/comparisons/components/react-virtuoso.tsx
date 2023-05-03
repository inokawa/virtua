import React, { useMemo, useRef } from "react";
import { TestComponent } from "./common";
import { Virtuoso } from "react-virtuoso";

const listStyle = { flex: 1 };

export const ReactVirtuosoList = ({
  count,
  Component,
}: {
  count: number;
  Component: TestComponent;
}) => {
  return (
    <Virtuoso
      style={listStyle}
      totalCount={count}
      itemContent={useMemo(() => (i) => <Component key={i} index={i} />, [])}
    />
  );
};
