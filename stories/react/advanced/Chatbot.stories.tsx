import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

type Data = {
  id: number;
  value: string;
  role: "user" | "assistant";
};

// A turn is a message of the user and the messages of the assistant following it
const groupByTurn = (messages: Data[]): Data[][] => {
  const turns: Data[][] = [];
  for (const message of messages) {
    if (message.role === "user" || !turns.length) {
      turns.push([message]);
    } else {
      turns[turns.length - 1].push(message);
    }
  }
  return turns;
};

const Message = ({ value, role }: Pick<Data, "value" | "role">) => {
  return (
    <div style={{ padding: 10 }}>
      <div
        style={{
          border: "solid 1px #ccc",
          background: "#fff",
          padding: 10,
          borderRadius: 8,
          whiteSpace: "pre-wrap",
          ...(role === "user"
            ? { background: "lightyellow", marginLeft: 160 }
            : { marginRight: 160 }),
        }}
      >
        {value}
      </div>
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

    const turns = groupByTurn(items);

    useEffect(() => {
      if (!ref.current || !turns.length) return;
      ref.current.scrollToIndex(turns.length - 1, {
        smooth: true,
        align: "start",
      });
    }, [turns.length]);

    const disabled = !value.length || streaming;
    const submit = () => {
      if (disabled) return;
      setValue("");

      const question: Data = { id: id.current++, value, role: "user" };
      const answer: Data = { id: id.current++, value: "", role: "assistant" };

      setItems((p) => [...p, question, answer]);
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
              d.id === answer.id
                ? { ...d, value: d.value + faker.lorem.paragraph(amount) }
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
          {turns.map((turn, i) => (
            <div
              key={turn[0].id}
              style={{
                // The last turn fills the viewport, so its question can be scrolled to the top while its answer is short
                minHeight: i === turns.length - 1 ? "100cqh" : undefined,
              }}
            >
              {turn.map((d) =>
                d.value ? (
                  <Message key={d.id} value={d.value} role={d.role} />
                ) : null,
              )}
            </div>
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
