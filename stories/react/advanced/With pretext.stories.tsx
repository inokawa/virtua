import type { Meta, StoryObj } from "@storybook/react-vite";
import { CacheSnapshot, VList, VListHandle } from "../../../src";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { prepare, layout, clearCache, PreparedText } from "@chenglou/pretext";
import { faker } from "@faker-js/faker";

export default {
  component: VList,
} as Meta;

// The CSS of the items must match the inputs of prepare()/layout().
const fontFamily = "Inter";
const fontSize = 16;
const lineHeight = 20;
const font = `${fontSize}px ${fontFamily}`;
const paddingY = 8;
const paddingX = 12;
const borderWidth = 1;
// Fix the text width regardless of scrollbar width to predict before render.
const scrollbarGutter = 20;

const preparedTexts = new Map<string, PreparedText>();

const getTextWidth = (width: number): number =>
  width - paddingX * 2 - scrollbarGutter;

const predictSize = (text: string, textWidth: number): number => {
  let prepared = preparedTexts.get(text);
  if (!prepared) {
    preparedTexts.set(
      text,
      (prepared = prepare(text, font, { whiteSpace: "pre-wrap" })),
    );
  }
  return (
    layout(prepared, textWidth, lineHeight).height + paddingY * 2 + borderWidth
  );
};

const PrelayoutedList = ({
  data,
  width,
  height,
  onMeasure,
}: {
  data: { id: string; text: string }[];
  width: number;
  height: number;
  onMeasure?: (scrollSize: number) => void;
}) => {
  const textWidth = getTextWidth(width);
  const listRef = useRef<VListHandle>(null);

  const cache = useMemo((): CacheSnapshot => {
    return [data.map((d) => predictSize(d.text, textWidth))];
  }, [data, textWidth]);

  useEffect(() => {
    onMeasure?.(listRef.current!.scrollSize);
  }, [cache]);

  return (
    <VList
      ref={listRef}
      data={data}
      cache={cache}
      style={{ width, height }}
      onScroll={() => {
        onMeasure?.(listRef.current!.scrollSize);
      }}
    >
      {(item) => (
        <div
          key={item.id}
          style={{
            padding: `${paddingY}px ${paddingX}px`,
            borderBottom: `solid ${borderWidth}px #ccc`,
            background: "#fff",
          }}
        >
          <div
            style={{
              width: textWidth,
              fontFamily,
              fontSize,
              lineHeight: `${lineHeight}px`,
              whiteSpace: "pre-wrap",
            }}
          >
            {item.text}
          </div>
        </div>
      )}
    </VList>
  );
};

const debugBarHeight = 24;

export const Default: StoryObj = {
  name: "With pretext",
  render: () => {
    const [items] = useState(() =>
      Array.from({ length: 1000 }).map((_, i) => ({
        id: String(i),
        text: faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 1),
      })),
    );
    const [size, setSize] = useState(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
    // Texts prepared with a fallback font return wrong sizes, so predict only after the font is loaded.
    const [fontReady, setFontReady] = useState(false);
    const [measured, setMeasured] = useState<number | null>(null);

    useEffect(() => {
      const onResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        preparedTexts.clear();
        clearCache();
      };
    }, []);

    const predicted = useMemo(
      () =>
        fontReady
          ? items.reduce(
              (acc, d) => acc + predictSize(d.text, getTextWidth(size.width)),
              0,
            )
          : null,
      [items, size.width, fontReady],
    );

    return (
      <div>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`}
          onLoad={() => {
            document.fonts.load(font).then(() => {
              setFontReady(true);
            });
          }}
        />
        <div
          style={{
            height: debugBarHeight,
            boxSizing: "border-box",
            padding: 4,
            fontSize: 12,
          }}
        >
          predicted: {predicted == null ? "-" : `${predicted}px`} / measured:{" "}
          {measured == null ? "-" : `${measured}px`}
        </div>
        {fontReady && (
          <PrelayoutedList
            // Remount on resize because cache is restored only on mount
            key={size.width}
            data={items}
            width={size.width}
            height={size.height - debugBarHeight}
            onMeasure={setMeasured}
          />
        )}
      </div>
    );
  },
};
