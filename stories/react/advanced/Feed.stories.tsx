import type { Meta, StoryObj } from "@storybook/react-vite";
import { VList, VListHandle } from "../../../src";
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { delay, range } from "../common";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

const itemStyle: CSSProperties = {
  borderTop: "solid 1px #ccc",
  background: "#fff",
  padding: 32,
  paddingTop: 48,
  paddingBottom: 48,
  whiteSpace: "pre-wrap",
};

type TextData = {
  type: "text";
  id: number;
  value: string;
};
type ImageData = {
  type: "image";
  id: number;
  src: string;
};

type Data = TextData | ImageData;

const Item = ({ content }: { content: ReactNode }) => {
  return <div style={itemStyle}>{content} </div>;
};

export const Default: StoryObj = {
  name: "Feed",
  render: () => {
    const id = useRef(0);
    const createItem = (): Data => {
      const nextId = id.current++;
      return nextId % 3 !== 1
        ? {
            type: "text",
            id: nextId,
            value: faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 1),
          }
        : {
            type: "image",
            id: nextId,
            src: faker.image.url(),
          };
    };
    const createItems = (num: number) => range(num, createItem);

    const [shifting, setShifting] = useState(false);
    const fetchItems = async (isStart: boolean = false) => {
      setShifting(isStart);

      await delay(1000);
    };

    const ref = useRef<VListHandle>(null);
    const ITEM_BATCH_COUNT = 30;
    const [items, setItems] = useState(() => createItems(ITEM_BATCH_COUNT * 2));
    const elements = useMemo(
      () =>
        items.map((d) => (
          <Item
            key={d.id}
            content={
              d.type === "image" ? (
                <img src={d.src} style={{ maxWidth: "100%" }} />
              ) : (
                d.value
              )
            }
          />
        )),
      [items],
    );
    const THRESHOLD = 10;
    const count = items.length;
    const startFetchedCountRef = useRef(-1);
    const endFetchedCountRef = useRef(-1);

    const ready = useRef(false);
    useEffect(() => {
      ref.current?.scrollToIndex(items.length / 2 + 1);
      ready.current = true;
    }, []);

    return (
      <VList
        ref={ref}
        style={{ flex: 1 }}
        shift={shifting ? true : false}
        onScroll={async () => {
          if (!ready.current) return;
          if (!ref.current) return;

          const startOffset = ref.current.scrollOffset;
          const endOffset = startOffset + ref.current.viewportSize;
          if (
            endFetchedCountRef.current < count &&
            ref.current.findItemIndex(endOffset) + THRESHOLD > count
          ) {
            endFetchedCountRef.current = count;
            await fetchItems();
            setItems((prev) => [...prev, ...createItems(ITEM_BATCH_COUNT)]);
          } else if (
            startFetchedCountRef.current < count &&
            ref.current.findItemIndex(startOffset) - THRESHOLD < 0
          ) {
            startFetchedCountRef.current = count;
            await fetchItems(true);
            setItems((prev) => [...createItems(ITEM_BATCH_COUNT), ...prev]);
          }
        }}
      >
        {elements}
      </VList>
    );
  },
};
