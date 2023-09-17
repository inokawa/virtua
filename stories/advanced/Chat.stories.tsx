import { Meta, StoryObj } from "@storybook/react";
import { VList, VListHandle } from "../../src";
import React, {
  CSSProperties,
  useEffect,
  useMemo,
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
  me: boolean;
};

const itemStyle: CSSProperties = {
  border: "solid 1px #ccc",
  background: "#fff",
  margin: 10,
  padding: 10,
  borderRadius: 8,
  whiteSpace: "pre-wrap",
};

const Item = ({ value, me }: Data) => {
  return (
    <div
      style={{
        ...itemStyle,
        ...(me
          ? { background: "lightyellow", marginLeft: 80 }
          : { marginRight: 80 }),
      }}
    >
      {value}
    </div>
  );
};

export const Default: StoryObj = {
  name: "Chat",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      me = false,
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

    const ref = useRef<VListHandle>(null);

    const [value, setValue] = useState("Hello world!");

    useEffect(() => {
      if (!ref.current) return;
      ref.current.scrollToIndex(items.length - 1, "end");
    }, [items.length]);

    useEffect(() => {
      let canceled = false;
      let timer: NodeJS.Timeout | null = null;
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
    }, []);

    const disabled = !value.length;
    const submit = () => {
      if (disabled) return;
      setItems((p) => [...p, createItem({ value, me: true })]);
      setValue("");
    };

    return (
      <div
        style={{
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <VList ref={ref} style={{ flex: 1 }} mode="reverse">
          {items.map((d) => (
            <Item key={d.id} {...d} />
          ))}
        </VList>
        <form
          style={{ margin: 10 }}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            submit();
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
          <button type="submit" disabled={disabled}>
            submit
          </button>
        </form>
      </div>
    );
  },
};
