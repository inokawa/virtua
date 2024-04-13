import { Meta, StoryObj } from "@storybook/react";
import { Virtualizer, VirtualizerHandle } from "../../../src";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./radix-scroll-area.css";
import "./radix-select.css";

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

const SelectItem = ({ children, ...props }: Select.SelectItemProps) => {
  return (
    <Select.Item {...props} className="SelectItem">
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export const _Select: StoryObj = {
  name: "Select",
  render: () => {
    const items = useMemo(
      () =>
        Array.from({ length: 1000 }).map((_, i) => ({
          id: String(i),
          label: faker.animal.cat(),
        })),
      []
    );
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const ref = useRef<VirtualizerHandle>(null);
    const index = useMemo(
      () => items.findIndex((d) => d.id === value),
      [items, value]
    );
    useLayoutEffect(() => {
      if (!open || !value) return;
      if (index === -1) return;
      // immitate scroll
      ref.current?.scrollToIndex(index);

      // recover focus
      setTimeout(() => {
        (
          document.querySelector(
            ".SelectItem[data-state=checked]"
          ) as HTMLElement
        )?.focus({ preventScroll: true });
      });
    }, [open]);
    return (
      <div>
        <Select.Root
          value={value}
          onValueChange={setValue}
          open={open}
          onOpenChange={setOpen}
        >
          <Select.Trigger className="SelectTrigger" aria-label="Food">
            <Select.Value placeholder="Select a fruit…">
              {items.find((d) => d.id === value)?.label ?? ""}
            </Select.Value>
            <Select.Icon className="SelectIcon">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="SelectContent">
              <Select.ScrollUpButton className="SelectScrollButton">
                <ChevronUpIcon />
              </Select.ScrollUpButton>
              <Select.Viewport
                className="SelectViewport"
                style={{ width: "200px" }}
              >
                <Virtualizer
                  ref={ref}
                  keepMounted={index !== -1 ? [index] : undefined}
                  overscan={2 /* overscan for keyboard */}
                >
                  {items.map((d) => (
                    <SelectItem key={d.id} value={d.id}>
                      {d.label}
                    </SelectItem>
                  ))}
                </Virtualizer>
              </Select.Viewport>
              <Select.ScrollDownButton className="SelectScrollButton">
                <ChevronDownIcon />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    );
  },
};
