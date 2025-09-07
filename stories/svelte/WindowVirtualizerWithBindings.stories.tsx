import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { WindowVirtualizer } from "../../src/svelte";
import DefaultComponent from "./WindowVirtualizerWithBindings.svelte";

export default {
  component: WindowVirtualizer,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    Component: DefaultComponent,
  }),
};
