import type { Meta, StoryObj } from "@storybook/react-vite";
import { Virtualizer, VirtualizerHandle } from "../../../src";
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
  component: Virtualizer,
} as Meta;

type Data = {
  id: number;
  value: string;
  me?: boolean;
};

const itemStyle: CSSProperties = {
  border: "solid 1px #ccc",
  background: "#fff",
  margin: 10,
  padding: 10,
  borderRadius: 8,
  whiteSpace: "pre-wrap",
};

const Item = ({ me, children }: { me?: boolean; children: ReactNode }) => {
  return (
    <div
      style={{
        ...itemStyle,
        ...(me
          ? { background: "lightyellow", marginLeft: 160 }
          : { marginRight: 160 }),
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
      me,
    }: {
      value?: string;
      me?: boolean;
    } = {}): Data => ({
      id: id.current++,
      value: value,
      me,
    });
    const [items, setItems] = useState(() =>
      Array.from({ length: 100 }, () => createItem())
    );
    const [autoUpdating, setAutoUpdating] = useState(true);

    const ref = useRef<VirtualizerHandle>(null);

    const isPrepend = useRef(false);
    const shouldStickToBottom = useRef(true);

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
      if (!autoUpdating) return;
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
    }, [autoUpdating]);

    const disabled = !value.length;
    const submit = () => {
      if (disabled) return;
      shouldStickToBottom.current = true;
      setItems((p) => [...p, createItem({ value, me: true })]);
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
        <div
          style={{
            overflowY: "auto",
            flex: 1,
            // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
            overflowAnchor: "none",
            // flex style for spacer
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              // spacer to align virtualizer to the bottom when all items are visible in the viewport
              flexGrow: 1,
            }}
          />
          <Virtualizer
            ref={ref}
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
            {items.map((d) => (
              <Item key={d.id} me={d.me}>
                {d.value}
              </Item>
            ))}
          </Virtualizer>
        </div>
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
            <label>
              <input
                type="checkbox"
                checked={autoUpdating}
                onChange={() => {
                  setAutoUpdating((prev) => !prev);
                }}
              />
              auto update
            </label>
            <button
              type="button"
              onClick={() => {
                ref.current?.scrollTo(0);
              }}
            >
              jump to top
            </button>
            <button type="submit" disabled={disabled}>
              submit
            </button>
          </div>
        </form>
      </div>
    );
  },
};
