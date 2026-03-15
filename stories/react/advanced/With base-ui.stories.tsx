import type { Meta, StoryObj } from "@storybook/react-vite";
import { Virtualizer } from "../../../src";
import React, { useRef } from "react";
import { ScrollArea } from "@base-ui/react/scroll-area";
import { faker } from "@faker-js/faker";
import "./base-ui-scroll-area.css";

export default {
  component: Virtualizer,
} as Meta;

const TAGS = Array.from({ length: 1000 }).map((_, i) => ({
  id: i,
  label: faker.person.fullName(),
}));

export const _ScrollArea: StoryObj = {
  name: "Scroll Area",
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <ScrollArea.Root className="BaseScrollAreaRoot">
        <ScrollArea.Viewport ref={ref} className="BaseScrollAreaViewport">
          <Virtualizer scrollRef={ref}>
            {TAGS.map((tag) => (
              <div className="BaseTag" key={tag.id}>
                {tag.label}
              </div>
            ))}
          </Virtualizer>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="BaseScrollAreaScrollbar"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="BaseScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="BaseScrollAreaScrollbar"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="BaseScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    );
  },
};
