import React from "react";
import { List } from "virtua";
import { TestComponent } from "./common";

const listStyle = { flex: 1 };

export const VirtuaList = ({
  count,
  Component,
}: {
  count: number;
  Component: TestComponent;
}) => {
  return (
    <List style={listStyle}>
      {Array.from({ length: count }).map((_, i) => (
        <Component key={i} index={i} />
      ))}
    </List>
  );
};
