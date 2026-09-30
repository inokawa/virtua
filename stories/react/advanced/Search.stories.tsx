import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, { CSSProperties, useMemo, useRef, useState } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

const labelStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginRight: 4,
};

type Data = {
  id: string;
  name: string;
  description: string;
};

export const Default: StoryObj = {
  name: "Search",
  render: () => {
    const items = useState(() =>
      Array.from({ length: 1000 }).map((_, i): Data => ({
        id: String(i),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        description: faker.lorem.paragraphs(1),
      })),
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
      <div
        style={{
          height: "100vh",
          boxSizing: "border-box",
          padding: 16,
          background: "#f6f7f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={labelStyle}>
            search
            <input
              style={{ marginLeft: 4 }}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </label>
          <label style={labelStyle}>
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
          <label style={labelStyle}>
            <input
              type="radio"
              style={{ marginLeft: 4, marginTop: 0, marginBottom: 0 }}
              checked={!desc}
              onChange={() => {
                setDesc(false);
              }}
            />
            asc
          </label>
          <label style={labelStyle}>
            <input
              type="radio"
              style={{ marginLeft: 4, marginTop: 0, marginBottom: 0 }}
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
            flex: 1,
            minHeight: 0,
            border: "solid 1px #e5e7eb",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 16px",
              borderBottom: "solid 1px #eee",
              background: "#fafafa",
              color: "#6b7280",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            <div style={{ minWidth: 80 }}>id</div>
            <div style={{ minWidth: 200 }}>name</div>
            <div style={{ flex: 1, minWidth: 0 }}>description</div>
          </div>
          <VList ref={ref} style={{ flex: 1 }}>
            {!filtered.length ? (
              <div
                style={{ padding: 32, textAlign: "center", color: "#6b7280" }}
              >
                No data.
              </div>
            ) : (
              filtered.map((d) => (
                <div
                  key={d.id}
                  style={{
                    display: "flex",
                    padding: "10px 16px",
                    borderBottom: "solid 1px #eee",
                  }}
                >
                  <div style={{ minWidth: 80 }}>{d.id}</div>
                  <div style={{ minWidth: 200 }}>{d.name}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>{d.description}</div>
                </div>
              ))
            )}
          </VList>
        </div>
      </div>
    );
  },
};
