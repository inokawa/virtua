import type { Meta, StoryObj } from "@storybook/svelte";
import { VList } from "../../src/svelte";
import DefaultComponent from "./Default.svelte";
import HorizontalComponent from "./Horizontal.svelte";
import ControlsComponent from "./Controls.svelte";

export default {
  component: VList,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    Component: DefaultComponent,
  }),
};

export const Horizontal: StoryObj = {
  render: () => ({
    Component: HorizontalComponent,
  }),
};

export const Controls: StoryObj = {
  render: () => ({
    Component: ControlsComponent,
  }),
};
