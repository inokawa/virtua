import React, {
  Ref,
  createContext,
  memo,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { ListHandle, TestComponent } from "./common";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import {
  ListChildComponentProps,
  VariableSizeList as RWList,
} from "react-window";

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

const Context = createContext<{
  Component: TestComponent;
  setHeight: (index: number, height: number) => void;
}>(null!);

const Item = ({ index: i, style }: ListChildComponentProps) => {
  const { Component, setHeight } = useContext(Context);
  return (
    <div style={style} key={i}>
      <RWRow index={i} setHeight={setHeight} Component={Component} />
    </div>
  );
};

export const ReactWindowList = memo(
  ({
    count,
    Component,
    handle,
  }: {
    count: number;
    Component: TestComponent;
    handle?: Ref<ListHandle>;
  }) => {
    const heightsCache = useMemo<number[]>(
      () => Array.from({ length: count }).map(() => 50),
      []
    );
    const ref = useRef<RWList>(null);
    const getHeight = (i: number) => heightsCache[i];
    const setHeight = (index: number, height: number) => {
      heightsCache[index] = height;
      ref.current?.resetAfterIndex(index);
    };
    useImperativeHandle(handle, () => ({
      scrollToIndex: (i) => {
        ref.current?.scrollToItem(i);
      },
    }));

    return (
      <Context.Provider
        value={useMemo(
          () => ({ Component, setHeight }),
          [Component, setHeight]
        )}
      >
        <AutoSizer>
          {({ width, height }) => (
            <RWList
              ref={ref}
              width={width}
              height={height}
              itemCount={count}
              itemSize={getHeight}
            >
              {Item}
            </RWList>
          )}
        </AutoSizer>
      </Context.Provider>
    );
  }
);
