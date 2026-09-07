import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

const heights = [20, 40, 80, 77];

const ItemWithOnMount = ({
  i,
  onMount,
}: {
  i: number;
  onMount: (i: number) => void;
}) => {
  useEffect(() => {
    onMount(i);
  }, []);
  return (
    <div
      style={{
        height: heights[i % 4],
        borderBottom: "solid 1px #ccc",
        background: "#fff",
      }}
    >
      {i}
    </div>
  );
};

export const AppendOnly: StoryObj = {
  render: () => {
    const data = useMemo(
      () => Array.from({ length: 1000 }).map((_, i) => i),
      [],
    );
    const [indexes, setIndexes] = useState<number[]>([]);
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <button
            onClick={() => {
              setIndexes([]);
            }}
          >
            clear
          </button>
        </div>
        <VList data={data} keepMounted={indexes}>
          {(i) => (
            <ItemWithOnMount
              key={i}
              i={i}
              onMount={(i) => {
                setIndexes((prev) => {
                  const next = new Set(prev);
                  next.add(i);
                  return Array.from(next).sort((a, b) => a - b);
                });
              }}
            />
          )}
        </VList>
      </div>
    );
  },
};

type Message = {
  user: string;
  time: string;
  text: string;
};

const MessageItem = memo(
  ({
    message: { user, time, text },
    offscreen,
  }: {
    message: Message;
    offscreen?: boolean;
  }) => {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      const e = ref.current!;
      if (!offscreen) {
        e.removeAttribute("hidden");
        return;
      }
      // Skip rendering its contents but keep them findable by find-in-page.
      // https://github.com/facebook/react/issues/24740
      e.setAttribute("hidden", "until-found");
      // The browser reveals the found item to show its contents. Keep them invisible not to flash the plain text before the rich one is rendered.
      const onBeforeMatch = () => {
        e.style.visibility = "hidden";
      };
      e.addEventListener("beforematch", onBeforeMatch);
      return () => {
        e.removeEventListener("beforematch", onBeforeMatch);
        e.style.visibility = "";
      };
    }, [offscreen]);

    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          gap: 10,
          padding: 10,
          borderBottom: "solid 1px #ccc",
          background: "#fff",
          // Keep the height of the last rendered contents while hidden
          containIntrinsicSize: "auto 60px",
        }}
      >
        {offscreen ? (
          `${user} ${time} ${text}`
        ) : (
          <>
            <div
              style={{
                width: 36,
                height: 36,
                flexShrink: 0,
                borderRadius: "50%",
                background: "#e0e7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {user[0]}
            </div>
            <div>
              <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                <b>{user}</b>
                <small style={{ color: "#888" }}>{time}</small>
              </div>
              <div>{text}</div>
            </div>
          </>
        )}
      </div>
    );
  },
);

export const CtrlF: StoryObj = {
  name: "Ctrl+F",
  render: () => {
    const data = useMemo<Message[]>(
      () =>
        Array.from({ length: 1000 }, () => ({
          user: faker.person.firstName(),
          time: faker.date.recent().toLocaleTimeString(),
          text: faker.lorem.sentence(),
        })),
      [],
    );
    const indexes = useMemo(() => data.map((_, i) => i), [data]);
    return (
      <VList data={data} keepMounted={indexes} style={{ height: "100vh" }}>
        {(d, i, offscreen) => (
          <MessageItem key={i} message={d} offscreen={offscreen} />
        )}
      </VList>
    );
  },
};

type Data = {
  id: number;
  value: string;
};

type ItemProps = Data & {
  isEditing: boolean;
  toggleEditing: (id: number) => void;
};

const itemStyle: CSSProperties = {
  border: "solid 1px #ccc",
  background: "#fff",
  margin: 10,
  padding: 10,
  borderRadius: 8,
  whiteSpace: "pre-wrap",
};

const TextEditor = ({ value }: { value: string }) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <textarea
      style={{ width: "100%" }}
      rows={6}
      ref={ref}
      defaultValue={value}
    />
  );
};

const Item = ({ id, value, isEditing, toggleEditing }: ItemProps) => {
  return (
    <div
      style={{
        ...itemStyle,
      }}
    >
      {isEditing ? <TextEditor value={value} /> : value}
      <div>
        <button onClick={() => toggleEditing(id)}>
          {isEditing ? "Stop editing" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export const SelectedIndex: StoryObj = {
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
    }: {
      value?: string;
    } = {}): Data => ({
      id: id.current++,
      value: value,
    });
    const [items, setItems] = useState(() =>
      Array.from({ length: 20 }, () => createItem()),
    );
    const [editingItemId, setEditingItemId] = useState<number | null>(null);

    const ref = useRef<VListHandle>(null);

    const isPrepend = useRef(false);

    useLayoutEffect(() => {
      isPrepend.current = false;
    });

    useEffect(() => {
      if (!ref.current) return;

      ref.current.scrollToIndex(items.length - 1, { align: "end" });
    }, []);

    const toggleEditing = useCallback((itemId: number) => {
      setEditingItemId((currentValue) =>
        itemId === currentValue ? null : itemId,
      );
    }, []);

    return (
      <div
        style={{
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: 10 }}>
          1. Click "edit" button on any item
          <br />
          2. Modify text
          <br />
          3. Scroll that item out of view and back - the editor state is not
          lost, and item in edit mode is not unmounted when goes offscreen
        </div>
        <VList
          ref={ref}
          style={{ flex: 1 }}
          keepMounted={
            editingItemId
              ? [items.findIndex((item) => item.id === editingItemId)]
              : undefined
          }
          shift
          onScroll={(offset) => {
            if (!ref.current) return;

            if (offset < 100) {
              isPrepend.current = true;
              setItems((p) => [
                ...Array.from({ length: 20 }, () => createItem()),
                ...p,
              ]);
            }
          }}
        >
          {items.map((d) => (
            <Item
              key={d.id}
              isEditing={d.id === editingItemId}
              toggleEditing={toggleEditing}
              {...d}
            />
          ))}
        </VList>
      </div>
    );
  },
};
