import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { Virtualizer } from "../../../src/svelte";
import HeaderAndFooterComponent from "./HeaderAndFooter.svelte";
import NestedComponent from "./Nested.svelte";
import ReverseComponent from "./Reverse.svelte";

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

export const Reverse: StoryObj = {
  render: () => ({
    Component: ReverseComponent,
  }),
};
