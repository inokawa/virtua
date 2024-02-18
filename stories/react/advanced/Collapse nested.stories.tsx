import { Meta, StoryObj } from "@storybook/react";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import { range } from "../common";

export default {
  component: VList,
} as Meta;

const itemStyle: CSSProperties = {
  borderTop: "solid 1px limegreen",
  background: "#fff",
  padding: 32,
};

type Data = {
  id: number;
};

const Item = ({ content }: { content: ReactNode }) => {
  return <div style={itemStyle}>{content}</div>;
};

export const Default: StoryObj = {
  name: "Collapse nested",
  render: () => {
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
                collapseState={itemCollapseState}
                toggleCollapse={(id: string) => {
                  setItemCollapseState((state) => ({
                    ...state,
                    [id]: !state[id],
                  }));
                }}
              />
            }
          />
        )),
      [items, itemCollapseState],
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
  collapseState,
  toggleCollapse,
}: {
  id: number;
  collapseState: Record<string, boolean>;
  toggleCollapse: (id: string) => void;
}) => {
  return new Array(5)
    .fill(0)
    .map((v, i) => i)
    .map((index) => (
      <div
        key={index}
        style={{
          transition: "height 100ms linear",
          height: collapseState[`${id}-${index}`] ? 20 : 100,
          background: "#ccc",
          display: "flex",
          border: "1px solid rebeccapurple",
        }}
        onClick={() => toggleCollapse(`${id}-${index}`)}
      ></div>
    ));
};
