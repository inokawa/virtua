import { Meta, StoryObj } from "@storybook/react";
import { VList, VListHandle } from "../../src";
import React, { CSSProperties, useMemo, useRef, useState } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

const rowStyle: CSSProperties = {
  borderBottom: "solid 1px #ccc",
  display: "flex",
  flexDirection: "row",
};

const idColStyle: CSSProperties = {
  minWidth: 120,
};
const nameColStyle: CSSProperties = {
  minWidth: 240,
};

type Data = {
  id: string;
  name: string;
  description: string;
};

const Row = ({ id, name, description }: Data) => {
  return (
    <div style={rowStyle}>
      <div style={idColStyle}>{id}</div>
      <div style={nameColStyle}>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export const Default: StoryObj = {
  name: "Search",
  render: () => {
    const items = useState(() =>
      Array.from(
        { length: 1000 },
        (_, i): Data => ({
          id: String(i),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          description: faker.lorem.paragraphs(1),
        })
      )
    )[0];

    const ref = useRef<VListHandle>(null);

    const [value, setValue] = useState("");
    const [scrollValue, setScrollValue] = useState(0);
    const [desc, setDesc] = useState(false);

    const filtered = useMemo(() => {
      const v = value.toLowerCase();
      const res = items.filter((d) => {
        return (
          d.id.toLowerCase().includes(v) ||
          d.name.toLowerCase().includes(v) ||
          d.description.toLowerCase().includes(v)
        );
      });
      if (desc) {
        res.reverse();
      }
      return res;
    }, [value, items, desc]);

    return (
      <div>
        <div>
          <label style={{ marginRight: 4 }}>
            search
            <input
              style={{ marginLeft: 4 }}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </label>
          <label style={{ marginRight: 4 }}>
            scroll to
            <input
              style={{ marginLeft: 4 }}
              value={scrollValue}
              type="number"
              min={0}
              max={999}
              onChange={(e) => {
                const targetId = Number(e.target.value);
                if (Number.isNaN(targetId)) return;
                setScrollValue(targetId);
                const targetIdStar = String(targetId);
                const index = filtered.findIndex((d) => d.id === targetIdStar);
                if (index === -1) return;
                ref.current?.scrollToIndex(index);
              }}
            />
          </label>
          <label style={{ marginRight: 4 }}>
            <input
              type="radio"
              style={{ marginLeft: 4 }}
              checked={!desc}
              onChange={() => {
                setDesc(false);
              }}
            />
            asc
          </label>
          <label style={{ marginRight: 4 }}>
            <input
              type="radio"
              style={{ marginLeft: 4 }}
              checked={desc}
              onChange={() => {
                setDesc(true);
              }}
            />
            desc
          </label>
        </div>
        <div
          style={{
            width: "90vw",
            height: "90vh",
            border: "solid 1px #ddd",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row id="id" name="name" description="description" />
          <VList ref={ref} style={{ flex: 1 }}>
            {!filtered.length ? (
              <div>No data.</div>
            ) : (
              filtered.map((d, i) => <Row key={i} {...d} />)
            )}
          </VList>
        </div>
      </div>
    );
  },
};
