import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

type Data = {
  id: number;
  value: string;
  role: "user" | "assistant";
};

const itemStyle: CSSProperties = {
  border: "solid 1px #ccc",
  background: "#fff",
  padding: 10,
  borderRadius: 8,
  whiteSpace: "pre-wrap",
};

const AssistantItem = ({
  children,
  blankSize,
}: {
  children: ReactNode;
  blankSize?: number;
}) => {
  return (
    <div style={{ padding: 10, boxSizing: "border-box", minHeight: blankSize }}>
      {children ? (
        <div
          style={{
            ...itemStyle,
            marginRight: 160,
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

const UserItem = ({
  children,
  onMeasure,
}: {
  children: ReactNode;
  onMeasure?: (size: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && onMeasure) {
      onMeasure(ref.current.getBoundingClientRect().height);
    }
  }, []);
  return (
    <div ref={ref} style={{ padding: 10, boxSizing: "border-box" }}>
      <div
        style={{
          ...itemStyle,
          background: "lightyellow",
          marginLeft: 160,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Default: StoryObj = {
  name: "Chatbot",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      role,
    }: {
      value?: string;
      role: Data["role"];
    }): Data => ({
      id: id.current++,
      value: value,
      role,
    });
    const [items, setItems] = useState<Data[]>([]);

    const ref = useRef<VListHandle>(null);

    const [streaming, setStreaming] = useState(false);
    const [lastUserSize, setLastUserSize] = useState(0);
    const [blankSize, setBlankSize] = useState(0);

    const [value, setValue] = useState("Hello world!");

    const disabled = !value.length || streaming;
    const submit = () => {
      if (disabled) return;
      setValue("");

      const handle = ref.current;
      if (!handle) return;
      const lastItemIndex = items.length - 1;
      const item = createItem({ value: "", role: "assistant" });
      const { id } = item;

      setItems((p) => [...p, createItem({ role: "user", value }), item]);
      setStreaming(true);
      setBlankSize(handle.viewportSize);

      requestAnimationFrame(() => {
        handle.scrollToIndex(lastItemIndex + 1, {
          smooth: true,
          align: "start",
        });
      });

      // emulate streaming from LLM
      setTimeout(() => {
        let counter = 0;
        const amount = Math.floor(Math.random() * 5) + 1;
        const interval = setInterval(() => {
          if (counter++ > 20) {
            setStreaming(false);
            clearInterval(interval);
          }

          setItems((p) => {
            const next = [...p];
            const i = next.findIndex((item) => item.id === id);
            next[i] = {
              ...next[i],
              value: next[i].value + faker.lorem.paragraph(amount),
            };
            return next;
          });
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
        <VList ref={ref}>
          {items.map((d, i) =>
            d.role === "assistant" ? (
              <AssistantItem
                key={d.id}
                blankSize={
                  i === items.length - 1 ? blankSize - lastUserSize : undefined
                }
              >
                {d.value}
              </AssistantItem>
            ) : (
              <UserItem
                key={d.id}
                onMeasure={i === items.length - 2 ? setLastUserSize : undefined}
              >
                {d.value}
              </UserItem>
            )
          )}
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
