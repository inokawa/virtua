import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

type Data = {
  id: number;
  question: string;
  answer: string;
};

const itemStyle: CSSProperties = {
  border: "solid 1px #ccc",
  background: "#fff",
  padding: 10,
  borderRadius: 8,
  whiteSpace: "pre-wrap",
};

const Turn = ({
  question,
  answer,
  isLast,
}: {
  question: string;
  answer: string;
  isLast: boolean;
}) => {
  return (
    <div
      style={{
        // The last turn fills the viewport, so its question can be scrolled to the top while its answer is short
        minHeight: isLast ? "100cqh" : undefined,
      }}
    >
      <div style={{ padding: 10 }}>
        <div
          style={{
            ...itemStyle,
            background: "lightyellow",
            marginLeft: 160,
          }}
        >
          {question}
        </div>
      </div>
      {answer ? (
        <div style={{ padding: 10 }}>
          <div
            style={{
              ...itemStyle,
              marginRight: 160,
            }}
          >
            {answer}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const Default: StoryObj = {
  name: "Chatbot",
  render: () => {
    const id = useRef(0);
    const [items, setItems] = useState<Data[]>([]);

    const ref = useRef<VListHandle>(null);

    const [streaming, setStreaming] = useState(false);

    const [value, setValue] = useState("Hello world!");

    useEffect(() => {
      if (!ref.current || !items.length) return;
      ref.current.scrollToIndex(items.length - 1, {
        smooth: true,
        align: "start",
      });
    }, [items.length]);

    const disabled = !value.length || streaming;
    const submit = () => {
      if (disabled) return;
      setValue("");

      const item: Data = { id: id.current++, question: value, answer: "" };

      setItems((p) => [...p, item]);
      setStreaming(true);

      // emulate streaming from LLM
      setTimeout(() => {
        let counter = 0;
        const amount = Math.floor(Math.random() * 5) + 1;
        const interval = setInterval(() => {
          if (counter++ > 20) {
            setStreaming(false);
            clearInterval(interval);
          }

          setItems((p) =>
            p.map((d) =>
              d.id === item.id
                ? { ...d, answer: d.answer + faker.lorem.paragraph(amount) }
                : d,
            ),
          );
        }, 100);
      }, 1000);
    };

    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <VList
          ref={ref}
          style={{
            // 100cqh is the height of the viewport
            containerType: "size",
          }}
        >
          {items.map((d, i) => (
            <Turn
              key={d.id}
              question={d.question}
              answer={d.answer}
              isLast={i === items.length - 1}
            />
          ))}
        </VList>

        <form
          style={{ display: "flex", flexDirection: "column", margin: 10 }}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            submit();
          }}
        >
          <textarea
            style={{ flex: 1 }}
            rows={6}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter" && (e.ctrlKey || e.metaKey)) {
                submit();
                e.preventDefault();
              }
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              justifyContent: "flex-end",
            }}
          >
            <button type="submit" disabled={disabled}>
              ask ai
            </button>
          </div>
        </form>
      </div>
    );
  },
};
