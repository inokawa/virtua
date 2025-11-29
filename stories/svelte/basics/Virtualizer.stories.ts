import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { Virtualizer } from "../../../src/svelte";
import HeaderAndFooterComponent from "./HeaderAndFooter.svelte";
import NestedComponent from "./Nested.svelte";
import TableComponent from "./TableElement.svelte";

export default {
  component: Virtualizer,
} satisfies Meta;

export const HeaderAndFooter: StoryObj = {
  render: () => ({
    Component: HeaderAndFooterComponent,
  }),
};

export const Nested: StoryObj = {
  render: () => ({
    Component: NestedComponent,
  }),
};

export const TableElement: StoryObj = {
  render: () => ({
    Component: TableComponent,
  }),
};
