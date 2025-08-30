import { Meta, StoryObj } from "@storybook/react-vite";
import { CustomContainerComponentProps, Virtualizer } from "../../../src";
import React, {
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { faker } from "@faker-js/faker";
import { mergeRefs } from "react-merge-refs";

export default {
  component: Virtualizer,
} as Meta;

const Item = ({
  children,
  isStart,
  isEnd,
  onUp,
  onDown,
  onDelete,
}: {
  children: ReactNode;
  isStart: boolean;
  isEnd: boolean;
  onUp: () => void;
  onDown: () => void;
  onDelete: () => void;
}) => {
  return (
    <div
      style={{
        padding: 10,
        height: 40,
        display: "flex",
        borderBottom: "solid 1px #ccc",
        background: "#fff",
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>
      <div style={{ display: "flex" }}>
        <button disabled={isStart} onClick={onUp}>
          up
        </button>
        <button disabled={isEnd} onClick={onDown}>
          down
        </button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

const RefContext = createContext<React.RefCallback<Element>>(null!);

const Container = forwardRef<HTMLDivElement, CustomContainerComponentProps>(
  (props, ref) => {
    const animationParent = useContext(RefContext);
    return (
      <div
        ref={useMemo(
          () => mergeRefs([ref, animationParent]),
          [ref, animationParent]
        )}
        {...props}
      />
    );
  }
);

export const Default: StoryObj = {
  name: "With auto-animate",
  render: () => {
    const id = useRef(0);
    const createItem = () => ({
      id: ++id.current,
      data: faker.music.songName(),
    });
    const [items, setItems] = useState(() =>
      Array.from({ length: 100 }, createItem)
    );
    const [animationParent, enable] = useAutoAnimate();

    const scrolling = useRef(false);
    return (
      <div
        style={{
          height: "100vh",
          width: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RefContext.Provider value={animationParent}>
          <div style={{ overflowY: "auto", flex: 1 }}>
            <Virtualizer
              as={Container}
              onScroll={() => {
                const prevScrolling = scrolling.current;
                scrolling.current = true;
                if (prevScrolling !== scrolling.current) {
                  enable(false);
                }
              }}
              onScrollEnd={() => {
                scrolling.current = false;
                enable(true);
              }}
            >
              {items.map((item, i) => (
                <Item
                  key={item.id}
                  isStart={i === 0}
                  isEnd={i === items.length - 1}
                  onUp={() => {
                    setItems((prev) => {
                      const next = [...prev];
                      next.splice(i - 1, 0, next.splice(i, 1)[0]);
                      return next;
                    });
                  }}
                  onDown={() => {
                    setItems((prev) => {
                      const next = [...prev];
                      next.splice(i + 1, 0, next.splice(i, 1)[0]);
                      return next;
                    });
                  }}
                  onDelete={() => {
                    setItems((prev) => {
                      const next = [...prev];
                      next.splice(i, 1);
                      return next;
                    });
                  }}
                >
                  {item.data}
                </Item>
              ))}
            </Virtualizer>
          </div>
        </RefContext.Provider>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 8,
            height: 40,
            maxHeight: 40,
            background: "white",
          }}
        >
          <button
            onClick={() => {
              setItems((prev) => [...prev, createItem()]);
            }}
          >
            append
          </button>
        </div>
      </div>
    );
  },
};
