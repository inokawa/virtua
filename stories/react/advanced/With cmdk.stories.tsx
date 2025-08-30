import { Meta, StoryObj } from "@storybook/react-vite";
import { CustomItemComponentProps, Virtualizer } from "../../../src";
import React, {
  ReactElement,
  cloneElement,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from "react";
import { Command } from "cmdk";
import { faker } from "@faker-js/faker";

const TAGS = Array.from({ length: 1000 }).map((_, i) => ({
  id: String(i),
  label: faker.person.fullName(),
}));

const Item = forwardRef<HTMLDivElement, CustomItemComponentProps>(
  ({ children, style }, ref) => {
    children = children as ReactElement;

    return cloneElement(children, {
      ref,
      style: { ...children.props.style, ...style },
    });
  }
);

export default {
  component: Virtualizer,
} as Meta;

export const Default: StoryObj = {
  name: "With cmdk",
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState("");
    const filtered = useMemo(() => {
      if (!value) return TAGS;
      const normalizedValue = value.toLowerCase();
      return TAGS.filter((t) =>
        t.label.toLowerCase().includes(normalizedValue)
      );
    }, [value]);

    return (
      <>
        <Command label="Command Menu" value={selected} shouldFilter={false}>
          <Command.Input value={value} onValueChange={setValue} />
          <Command.Empty>No results found.</Command.Empty>
          <Command.List ref={ref}>
            <Virtualizer scrollRef={ref} item={Item}>
              {filtered.map((t) => (
                <Command.Item key={t.id} onSelect={setSelected}>
                  {t.label}
                </Command.Item>
              ))}
            </Virtualizer>
          </Command.List>
        </Command>
        <style>{`
[cmdk-root] {
  width: 400px;
  background: white;
  border-radius: 12px;
  padding: 8px 0;
}
[cmdk-list] {
  overflow-y: auto;
  height: 400px;
}
[cmdk-item] {
  height: 40px;
  cursor: pointer;
}
[cmdk-item][data-selected] {
  background: skyblue;
}
`}</style>
      </>
    );
  },
};
