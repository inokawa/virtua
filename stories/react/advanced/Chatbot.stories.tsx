import { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useLayoutEffect,
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

const UserItem = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        ...itemStyle,
        background: "lightyellow",
        margin: 10,
        marginLeft: 160,
      }}
    >
      {children}
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

    const isPrepend = useRef(false);
    const shouldStickToBottom = useRef(true);

    const [streaming, setStreaming] = useState(false);
    const [blankSize, setBlankSize] = useState(0);

    const [value, setValue] = useState("Hello world!");

    useLayoutEffect(() => {
      isPrepend.current = false;
    });

    useEffect(() => {
      if (!ref.current) return;
      const handle = ref.current;
      const lastItemIndex = items.length - 1;
      if (shouldStickToBottom.current) {
        handle.scrollToIndex(lastItemIndex, { align: "end" });
      }
    }, [items]);

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
      shouldStickToBottom.current = false;

      const isAtBottom =
        handle.scrollOffset - handle.scrollSize + handle.viewportSize >=
        // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
        -1.5;
      if (!isAtBottom) {
        handle.scrollToIndex(lastItemIndex, {
          align: "start",
          offset: handle.getItemSize(lastItemIndex),
        });
      }

      // wait for new item mounts
      setTimeout(() => {
        const userIndex = lastItemIndex + 1;
        setBlankSize(handle.viewportSize - handle.getItemSize(userIndex));

        handle.scrollToIndex(userIndex, {
          smooth: true,
          align: "start",
        });
      }, 50);

      // emulate streaming from LLM
      setTimeout(() => {
        shouldStickToBottom.current = true;

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
        <VList ref={ref} shift={isPrepend.current}>
          {items.map((d, i) =>
            d.role === "assistant" ? (
              <AssistantItem
                key={d.id}
                blankSize={i === items.length - 1 ? blankSize : undefined}
              >
                {d.value}
              </AssistantItem>
            ) : (
              <UserItem key={d.id}>{d.value}</UserItem>
            )
          )}
        </VList>
        <form
          style={{ display: "flex", justifyContent: "flex-end", margin: 10 }}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            submit();
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <textarea
              style={{ width: 400 }}
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
          </div>
        </form>
      </div>
    );
  },
};
