import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { WindowMasonry } from "../../../src/svelte";
import DefaultComponent from "./WindowMasonryDefault.svelte";

export default {
  component: WindowMasonry,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    Component: DefaultComponent,
  }),
};
