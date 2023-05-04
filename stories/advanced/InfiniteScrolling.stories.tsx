import { Meta, StoryObj } from "@storybook/react";
import React, { CSSProperties, startTransition, useRef, useState } from "react";
import { List } from "../../src";
import { faker } from "@faker-js/faker";

export default {
  component: List,
} as Meta;

const Spinner = (props: { hidden: boolean }) => {
  return (
    <>
      <div
        style={{
          height: 100,
          display: props.hidden ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        <span className="loader" />
      </div>
      <style>
        {`
      .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ccc;
        animation: prixClipFix 2s linear infinite ;
      }
  
      @keyframes rotate {
        100%   {transform: rotate(360deg)}
      }
  
      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }`}
      </style>
    </>
  );
};

const rowStyle: CSSProperties = {
  borderBottom: "solid 1px #ccc",
  background: "white",
  display: "flex",
  flexDirection: "row",
  padding: 10,
};

const leftStyle: CSSProperties = {
  width: 200,
  minWidth: 200,
};

type Data = {
  id: string;
  name: string;
  text: string;
};

const Row = ({ name, text }: Data) => {
  return (
    <div style={rowStyle}>
      <div style={leftStyle}>{name}</div>
      <div>{text}</div>
    </div>
  );
};

export const InfiniteScrolling: StoryObj = {
  render: () => {
    const id = useRef(0);
    const createItem = (): Data => ({
      id: String(id.current++),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      text: faker.lorem.paragraphs(4),
    });

    const ITEM_BATCH_COUNT = 50;
    const createItems = () =>
      Array.from({ length: ITEM_BATCH_COUNT }, () => createItem());

    const [items, setItems] = useState(createItems);
    const [fetching, setFetching] = useState(false);
    const [range, setRange] = useState([-1, -1]);
    const fetchedCountRef = useRef(-1);
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            background: "white",
            borderBottom: "solid 1px #ccc",
          }}
        >
          items: {items.length} index: ({range[0]}, {range[1]})
        </div>
        <List
          style={{ flex: 1 }}
          itemSize={200}
          onRangeChange={async ({ start, end, count }) => {
            startTransition(() => {
              setRange([start, end]);
            });
            if (end + 30 > count && fetchedCountRef.current < count) {
              fetchedCountRef.current = count;
              setFetching(true);
              await new Promise((r) => setTimeout(r, 1500));
              setItems((prev) => [...prev, ...createItems()]);
              setFetching(false);
            }
          }}
        >
          {items.map((d) => (
            <Row key={d.id} id={d.id} name={d.name} text={d.text} />
          ))}
          {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
          <Spinner hidden={!fetching} />
        </List>
      </div>
    );
  },
};
