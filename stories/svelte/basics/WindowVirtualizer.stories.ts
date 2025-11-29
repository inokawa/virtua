import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { WindowVirtualizer } from "../../../src/svelte";
import DefaultComponent from "./WindowVirtualizer.svelte";

export default {
  component: WindowVirtualizer,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    Component: DefaultComponent,
  }),
};
