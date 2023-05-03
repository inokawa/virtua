import React, { useEffect, useMemo, useRef } from "react";
import { TestComponent } from "./common";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import { VariableSizeList as RWList } from "react-window";

const RWRow = ({
  index: i,
  setHeight,
  Component,
}: {
  index: number;
  setHeight: (index: number, height: number) => void;
  Component: TestComponent;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setHeight(i, ref.current.getBoundingClientRect().height);
    }
  }, []);
  return <Component ref={ref} index={i} />;
};

export const ReactWindowList = ({
  count,
  Component,
}: {
  count: number;
  Component: TestComponent;
}) => {
  const heightsCache = useMemo<number[]>(
    () => Array.from({ length: count }).map(() => 50),
    []
  );
  const rwListRef = useRef<RWList>(null);
  const getHeight = (i: number) => heightsCache[i];
  const setHeight = (index: number, height: number) => {
    heightsCache[index] = height;
    rwListRef.current?.resetAfterIndex(index);
  };

  return (
    <div style={{ flex: 1 }}>
      <AutoSizer>
        {({ width, height }) => (
          <RWList
            ref={rwListRef}
            width={width}
            height={height}
            itemCount={count}
            itemSize={getHeight}
          >
            {({ index: i, style }) => (
              <div style={style} key={i}>
                <RWRow index={i} setHeight={setHeight} Component={Component} />
              </div>
            )}
          </RWList>
        )}
      </AutoSizer>
    </div>
  );
};
