import { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { range } from "../common";

export default {
  component: VList,
} as Meta;

const Item = ({ content }: { content: ReactNode }) => {
  return (
    <div
      style={{
        borderTop: "solid 1px #ccc",
        background: "#fff",
        padding: 32,
        paddingTop: 48,
        paddingBottom: 48,
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </div>
  );
};

export const CollapseAndScroll: StoryObj = {
  render: () => {
    type Data = {
      id: number;
    };

    const [itemCollapseState, setItemCollapseState] = useState<
      Record<string, boolean>
    >({});
    const id = useRef(0);
    const createItem = (): Data => {
      return {
        id: id.current++,
      };
    };
    const createItems = (num: number) => range(num, createItem);

    const ref = useRef<VListHandle>(null);
    const [items] = useState(() => createItems(30));
    const elements = useMemo(
      () =>
        items.map((d) => (
          <Item
            key={d.id}
            content={
              <Collapser
                id={d.id}
                isCollapsed={itemCollapseState[d.id]}
                resize={() => {
                  setItemCollapseState((state) => ({
                    ...state,
                    [d.id]: !state[d.id],
                  }));
                }}
                scroll={() => {
                  ref.current?.scrollToIndex(d.id, { smooth: true });
                }}
              />
            }
          />
        )),
      [items, itemCollapseState]
    );

    return (
      <VList ref={ref} style={{ flex: 1 }}>
        {elements}
      </VList>
    );
  },
};

const Collapser = ({
  id,
  isCollapsed,
  resize,
  scroll,
}: {
  id: number;
  isCollapsed: boolean;
  resize: () => void;
  scroll: () => void;
}) => {
  return (
    <div
      style={{
        transition: "height 250ms linear",
        height: isCollapsed ? 200 : 600,
        background: "#ccc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div>{id}</div>
      <button onClick={resize}>Resize</button>
      <button onClick={scroll}>Smooth Scroll</button>
      <button
        onClick={() => {
          resize();
          scroll();
        }}
      >
        Resize + Smooth Scroll
      </button>
    </div>
  );
};

const Item2 = ({ content }: { content: ReactNode }) => {
  return (
    <div
      style={{
        borderTop: "solid 1px red",
        background: "#fff",
        whiteSpace: "pre-wrap",
        overflow: "hidden",
      }}
    >
      {content}
    </div>
  );
};

export const CollapseAndRemove: StoryObj = {
  render: () => {
    type Data = {
      id: number;
    };

    const [itemsHidden, setItemsHidden] = useState<Record<string, true>>({});
    const id = useRef(0);
    const createItem = (): Data => {
      return {
        id: id.current++,
      };
    };
    const createItems = (num: number) => range(num, createItem);

    const ref = useRef<VListHandle>(null);
    const [items] = useState(() => createItems(60));
    const elements = useMemo(
      () =>
        items
          .filter(({ id }) => !itemsHidden[id])
          .map((d) => (
            <Item2
              key={d.id}
              content={
                <Collapser2
                  id={d.id}
                  onHidden={() => {
                    setItemsHidden((state) => ({
                      ...state,
                      [d.id]: true,
                    }));
                  }}
                />
              }
            />
          )),
      [items, itemsHidden]
    );

    return (
      <VList ref={ref} style={{ flex: 1 }}>
        {elements}
      </VList>
    );
  },
};

const Collapser2 = ({ id, onHidden }: { id: number; onHidden: () => void }) => {
  const [shouldHide, setShouldHide] = useState(false);
  const shouldHideRef = useRef(false);

  const hideCompleteRef = useRef(false);

  // Persist state to ref so current value may be accessed on cleanup effect
  useEffect(() => {
    shouldHideRef.current = shouldHide;
  }, [shouldHide]);

  useEffect(() => {
    // if Virtua removes (height collapses out of view), persist removal
    return () => {
      if (hideCompleteRef.current) return;
      if (!shouldHideRef.current) return;

      onHidden();
    };
  }, []);

  return (
    <div
      style={{
        transition: "height 250ms linear",
        height: shouldHide ? 0 : 300,
        background: "#ccc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
      onTransitionEnd={() => {
        if (!shouldHide) return;

        hideCompleteRef.current = true;
        onHidden();
      }}
      onClick={() => {
        setShouldHide(true);
      }}
    >
      <div>{id}</div>
    </div>
  );
};

const TwoStageRenderItem = ({ index }: { index: number }) => {
  const getRandomHeight = () => Math.floor(Math.random() * 100) + 50; // Random height between 50 and 150 px
  const getRandomDelay = () => Math.floor(Math.random() * 300) + 100; // Random delay between 100 and 400 ms

  const [immediateHeight] = useState(() => getRandomHeight());
  const [delayedHeight, setDelayedHeight] = useState<number | null>(null);

  useEffect(() => {
    const delay = getRandomDelay();
    const timer = setTimeout(() => {
      setDelayedHeight(getRandomHeight());
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ border: "5px solid black", margin: "5px 0" }}>
      <div style={{ height: immediateHeight, background: "#e0e0e0" }}>
        Immediate Content {index} (Height: {immediateHeight}px)
      </div>
      {delayedHeight !== null ? (
        <div style={{ height: delayedHeight, background: "#f0f0f0" }}>
          Delayed Content {index} (Height: {delayedHeight}px)
        </div>
      ) : (
        <div style={{ padding: "10px", background: "#ffe0e0" }}>Loading...</div>
      )}
    </div>
  );
};

export const TwoStageRender: StoryObj = {
  render: () => {
    return (
      <div style={{ height: "400px", border: "1px solid black" }}>
        <VList style={{ height: "100%", width: "100%" }}>
          {Array.from({ length: 100 }).map((_, index) => (
            <TwoStageRenderItem key={index} index={index} />
          ))}
        </VList>
      </div>
    );
  },
};
