import type { Meta, StoryObj } from "@storybook/react-vite";
import { Virtualizer } from "../../../src";
import React, { useRef } from "react";
import { faker } from "@faker-js/faker";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import styles from "./radix-scroll-area.module.css";

export default {
  component: Virtualizer,
} as Meta;

const TAGS = Array.from({ length: 1000 }).map((_, i) => ({
  id: i,
  label: faker.person.fullName(),
}));

export const Default: StoryObj = {
  name: "With radix-ui",
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <ScrollArea.Root className={styles.root}>
        <ScrollArea.Viewport ref={ref} className={styles.viewport}>
          <Virtualizer scrollRef={ref}>
            {TAGS.map((tag) => (
              <div className={styles.item} key={tag.id}>
                {tag.label}
              </div>
            ))}
          </Virtualizer>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className={styles.scrollbar}
          orientation="vertical"
        >
          <ScrollArea.Thumb className={styles.thumb} />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className={styles.scrollbar}
          orientation="horizontal"
        >
          <ScrollArea.Thumb className={styles.thumb} />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className={styles.corner} />
      </ScrollArea.Root>
    );
  },
};
