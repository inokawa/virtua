/**
 * @jsxImportSource solid-js
 */
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Virtualizer, VirtualizerHandle } from "../../../src/solid";
import { createSignal, createEffect, onCleanup, onMount } from "solid-js";
import { faker } from "@faker-js/faker";

export default {
  component: Virtualizer,
} as Meta;

type Data = {
  id: number;
  value: string;
  me?: boolean;
};

const itemStyle = {
  border: "solid 1px #ccc",
  background: "#fff",
  margin: "10px",
  padding: "10px",
  "border-radius": "8px",
  "white-space": "pre-wrap",
};

function Item(props: { me?: boolean; children: any }) {
  return (
    <div
      style={{
        ...itemStyle,
        ...(props.me
          ? { background: "lightyellow", "margin-left": "160px" }
          : { "margin-right": "160px" }),
      }}
    >
      {props.children}
    </div>
  );
}

export const Default: StoryObj = {
  name: "Chat",
  render: () => {
    let id = 0;
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      me,
    }: { value?: string; me?: boolean } = {}): Data => ({
      id: id++,
      value,
      me,
    });
    const [items, setItems] = createSignal<Data[]>(
      Array.from({ length: 100 }, () => createItem())
    );
    const [autoUpdating, setAutoUpdating] = createSignal(true);
    const [virtualizerHandle, setVirtualizerHandle] = createSignal<
      VirtualizerHandle | undefined
    >();
    const [isPrepend, setIsPrepend] = createSignal(false);
    const [shouldStickToBottom, setShouldStickToBottom] = createSignal(true);
    const [value, setValue] = createSignal("Hello world!");

    createEffect(() => {
      items();
      setIsPrepend(false);
    });

    createEffect(() => {
      const handle = virtualizerHandle();
      if (!handle) return;
      const lastItemIndex = items().length - 1;
      if (shouldStickToBottom()) {
        handle.scrollToIndex(lastItemIndex, { align: "end" });
      }
    });

    onMount(() => {
      let canceled = false;
      let timer: ReturnType<typeof setTimeout> | null = null;
      const setTimer = () => {
        timer = setTimeout(() => {
          if (canceled) return;
          setItems((prev) => [...prev, createItem()]);
          setTimer();
        }, 5000);
      };
      if (autoUpdating()) setTimer();
      onCleanup(() => {
        canceled = true;
        if (timer) clearTimeout(timer);
      });
    });

    const disabled = () => !value().length;
    const submit = () => {
      if (disabled()) return;
      setShouldStickToBottom(true);
      setItems((prev) => [...prev, createItem({ value: value(), me: true })]);
      setValue("");
    };

    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          "flex-direction": "column",
        }}
      >
        <div
          style={{
            "overflow-y": "auto",
            flex: 1,
            // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
            "overflow-anchor": "none",
            // flex style for spacer
            display: "flex",
            "flex-direction": "column",
          }}
        >
          <div
            style={{
              // spacer to align virtualizer to the bottom when all items are visible in the viewport
              "flex-grow": 1,
            }}
          />
          <Virtualizer
            ref={setVirtualizerHandle}
            data={items()}
            shift={isPrepend()}
            onScroll={(offset) => {
              const handle = virtualizerHandle();
              if (!handle) return;
              setShouldStickToBottom(
                offset - handle.scrollSize + handle.viewportSize >= -1.5
              );
              if (offset < 100) {
                setIsPrepend(true);
                setItems((prev) => [
                  ...Array.from({ length: 100 }, () => createItem()),
                  ...prev,
                ]);
              }
            }}
          >
            {(d) => <Item me={d.me}>{d.value}</Item>}
          </Virtualizer>
        </div>
        <form
          style={{
            display: "flex",
            "flex-direction": "column",
            margin: "10px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            submit();
          }}
        >
          <textarea
            style={{ flex: 1 }}
            rows={6}
            value={value()}
            onInput={(e) => setValue(e.currentTarget.value)}
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
              "flex-direction": "row",
              gap: "8px",
              "justify-content": "flex-end",
            }}
          >
            <label>
              <input
                type="checkbox"
                checked={autoUpdating()}
                onChange={() => setAutoUpdating((prev) => !prev)}
              />
              auto update
            </label>
            <button
              type="button"
              onClick={() => {
                const handle = virtualizerHandle();
                handle?.scrollTo(0);
              }}
            >
              jump to top
            </button>
            <button type="submit" disabled={disabled()}>
              submit
            </button>
          </div>
        </form>
      </div>
    );
  },
};
