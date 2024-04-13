import { Meta, StoryObj } from "@storybook/react";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
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
        <VList count={1000} keepMounted={indexes}>
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

const TextEditor = ({ value }) => {
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
      Array.from({ length: 20 }, () => createItem())
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
        itemId === currentValue ? null : itemId
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
          reverse
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
