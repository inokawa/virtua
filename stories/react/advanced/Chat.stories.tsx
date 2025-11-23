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
  role?: "me" | "ai";
};

const itemStyle: CSSProperties = {
  border: "solid 1px #ccc",
  background: "#fff",
  padding: 10,
  borderRadius: 8,
  whiteSpace: "pre-wrap",
};

const AiItem = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ padding: 10, minHeight: "50vh" }}>
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

const MeItem = ({ children }: { children: ReactNode }) => {
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

const Item = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        ...itemStyle,
        margin: 10,
        marginRight: 160,
      }}
    >
      {children}
    </div>
  );
};

export const Default: StoryObj = {
  name: "Chat",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      role,
    }: {
      value?: string;
      role?: Data["role"];
    } = {}): Data => ({
      id: id.current++,
      value: value,
      role,
    });
    const [items, setItems] = useState(() =>
      Array.from({ length: 100 }, () => createItem())
    );

    const ref = useRef<VListHandle>(null);

    const isPrepend = useRef(false);
    const shouldStickToBottom = useRef(true);

    const [streaming, setStreaming] = useState(false);

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

    useEffect(() => {
      if (streaming) return;

      let canceled = false;
      let timer: ReturnType<typeof setTimeout> | null = null;
      const setTimer = () => {
        timer = setTimeout(() => {
          if (canceled) return;
          setItems((p) => [...p, createItem()]);
          setTimer();
        }, 5000);
      };
      setTimer();
      return () => {
        canceled = true;
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [streaming]);

    const disabled = !value.length;
    const submit = () => {
      if (disabled) return;
      shouldStickToBottom.current = true;
      setItems((p) => [...p, createItem({ value, role: "me" })]);
      setValue("");
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
          style={{ flex: 1 }}
          reverse
          shift={isPrepend.current}
          onScroll={(offset) => {
            if (!ref.current) return;
            shouldStickToBottom.current =
              offset - ref.current.scrollSize + ref.current.viewportSize >=
              // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
              -1.5;

            if (offset < 100) {
              isPrepend.current = true;
              setItems((p) => [
                ...Array.from({ length: 100 }, () => createItem()),
                ...p,
              ]);
            }
          }}
        >
          {items.map((d, i) =>
            d.role === "ai" ? (
              <AiItem key={d.id}>{d.value}</AiItem>
            ) : d.role === "me" ? (
              <MeItem key={d.id}>{d.value}</MeItem>
            ) : (
              <Item key={d.id}>{d.value}</Item>
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
          <button
            style={{ position: "absolute", left: 10, bottom: 10 }}
            type="button"
            onClick={() => {
              ref.current?.scrollTo(0);
            }}
          >
            jump to top
          </button>
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
              <button
                type="button"
                disabled={streaming}
                onClick={() => {
                  const lastIndex = items.length;
                  const item = createItem({ value: "", role: "ai" });
                  const { id } = item;
                  setItems((p) => [...p, createItem({ role: "me" }), item]);
                  setStreaming(true);
                  shouldStickToBottom.current = false;

                  requestAnimationFrame(() => {
                    ref.current?.scrollToIndex(lastIndex, {
                      smooth: true,
                      align: "start",
                    });
                  });

                  setTimeout(() => {
                    shouldStickToBottom.current = true;

                    let counter = 0;
                    const interval = setInterval(() => {
                      if (counter++ > 40) {
                        setStreaming(false);
                        clearInterval(interval);
                      }

                      setItems((p) => {
                        const next = [...p];
                        const i = next.findIndex((item) => item.id === id);
                        next[i] = {
                          ...next[i],
                          value: next[i].value + faker.lorem.paragraph(2),
                        };
                        return next;
                      });
                    }, 100);
                  }, 1000);
                }}
              >
                ask ai
              </button>
              <button type="submit" disabled={disabled}>
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  },
};
