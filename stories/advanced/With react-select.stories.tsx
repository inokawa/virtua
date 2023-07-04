import { Meta, StoryObj } from "@storybook/react";
import {
  CustomItemComponentProps,
  CustomWindowComponentProps,
  VList,
  VListHandle,
} from "../../src";
import React, {
  CSSProperties,
  Ref,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Select, { MenuListProps, OptionProps, components } from "react-select";
import { faker } from "@faker-js/faker";
import { mergeRefs } from "react-merge-refs";

export default {
  component: VList,
} as Meta;

type OptionValue = {
  value: string;
  label: string;
};

const options = Array.from(
  { length: 1000 },
  (_, i): OptionValue => ({
    value: String(i),
    label: faker.music.songName(),
  })
);

const MenuListContext = createContext<
  Omit<MenuListProps<OptionValue>, "children">
>(null!);
const OptionContext = createContext<{
  style: CSSProperties;
  ref: Ref<HTMLDivElement>;
}>(null!);

const Window = forwardRef<HTMLDivElement, CustomWindowComponentProps>(
  ({ children, attrs, height }, ref) => {
    const { maxHeight, innerProps, innerRef } = useContext(MenuListContext);
    return (
      <div
        ref={mergeRefs([ref, innerRef])}
        {...attrs}
        style={{ ...attrs.style, height: maxHeight, maxHeight }}
        {...innerProps}
      >
        <div style={{ position: "relative", height }}>{children}</div>
      </div>
    );
  }
);
const Item = forwardRef<HTMLDivElement, CustomItemComponentProps>(
  ({ style, children }, ref) => {
    return (
      <OptionContext.Provider value={{ style, ref }}>
        {children}
      </OptionContext.Provider>
    );
  }
);

const MenuList = ({ children, ...rest }: MenuListProps<OptionValue>) => {
  const ref = useRef<VListHandle>(null);

  // https://github.com/jacobworrel/react-windowed-select/blob/master/src/MenuList.tsx
  const selectedIndex = useMemo(() => {
    let focusedIndex = -1;
    React.Children.forEach(children, (c, i) => {
      if (
        (c as React.ReactElement<OptionProps<OptionValue>>).props.isSelected
      ) {
        focusedIndex = i;
      }
    });
    return focusedIndex;
  }, [children]);
  useEffect(() => {
    if (selectedIndex === -1) return;
    ref.current?.scrollToIndex(selectedIndex);
  }, [selectedIndex]);

  return (
    <MenuListContext.Provider value={rest}>
      <VList ref={ref} element={Window} itemElement={Item}>
        {children}
      </VList>
    </MenuListContext.Provider>
  );
};
const Option = ({
  innerRef,
  innerProps,
  children,
  ...rest
}: OptionProps<OptionValue>) => {
  const { style, ref } = useContext(OptionContext);
  return (
    <components.Option
      {...rest}
      innerRef={mergeRefs([ref, innerRef])}
      innerProps={{
        ...innerProps,
        style: { ...style, height: 40 },
      }}
    >
      {children}
    </components.Option>
  );
};

export const Default: StoryObj = {
  name: "With react-select",
  render: () => {
    return <Select options={options} components={{ MenuList, Option }} />;
  },
};
