import type { Meta, StoryObj } from "@storybook/react-vite";
import { Virtualizer } from "../../../src";
import React, { useRef } from "react";
import { ScrollArea } from "@base-ui/react/scroll-area";
import { faker } from "@faker-js/faker";
import styles from "./base-ui-scroll-area.module.css";

export default {
  component: Virtualizer,
} as Meta;

const TAGS = Array.from({ length: 1000 }).map((_, i) => ({
  id: i,
  label: faker.person.fullName(),
}));

export const Default: StoryObj = {
  name: "With base-ui",
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
        <ScrollArea.Corner />
      </ScrollArea.Root>
    );
  },
};
