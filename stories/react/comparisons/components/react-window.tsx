import React, {
  Ref,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { ListHandle, TestComponent } from "./common";
import {
  ListImperativeAPI,
  List as RWList,
  RowComponentProps,
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

type Context = {
  Component: TestComponent;
  setHeight: (index: number, height: number) => void;
};

const Item = ({
  index: i,
  style,
  Component,
  setHeight,
}: RowComponentProps<Context>) => {
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
    const [heights, setHeights] = useState<number[]>(() =>
      Array.from({ length: count }).map(() => 50)
    );
    const ref = useRef<ListImperativeAPI>(null);
    const getHeight = (i: number) => heights[i];

    useImperativeHandle(handle, () => ({
      scrollToIndex: (i) => {
        ref.current?.scrollToRow({ index: i });
      },
    }));

    return (
      <RWList
        listRef={ref}
        rowCount={count}
        rowHeight={getHeight}
        rowComponent={Item}
        rowProps={useMemo(
          () => ({
            Component,
            setHeight: (index: number, height: number) => {
              setHeights((p) => {
                const next = [...p];
                next[index] = height;
                return next;
              });
            },
          }),
          [Component]
        )}
      />
    );
  }
);
