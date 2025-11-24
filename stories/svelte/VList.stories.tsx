import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { VList } from "../../src/svelte";
import DefaultComponent from "./Default.svelte";
import HorizontalComponent from "./Horizontal.svelte";
import ControlsComponent from "./Controls.svelte";
import ChatComponent from "./Chat.svelte";

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

export const Chat: StoryObj = {
  render: () => ({
    Component: ChatComponent,
  }),
};
