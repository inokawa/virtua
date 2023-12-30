import { Meta, StoryObj } from "@storybook/react";
import { Virtualizer } from "../../../src";
import React, { useRef } from "react";
import { faker } from "@faker-js/faker";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "./radix.css";

const TAGS = Array.from({ length: 1000 }).map((_, i) => ({
  id: i,
  label: faker.person.fullName(),
}));

export default {
  component: Virtualizer,
} as Meta;

export const Default: StoryObj = {
  name: "With radix-ui",
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport
          ref={ref}
          style={{ padding: "15px 20px", width: "auto" }}
          className="ScrollAreaViewport"
        >
          <Virtualizer scrollRef={ref}>
            <div className="Text">Tags</div>
            {TAGS.map((tag) => (
              <div className="Tag" key={tag.id}>
                {tag.label}
              </div>
            ))}
          </Virtualizer>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>
    );
  },
};
