import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { VList } from "../../../src/svelte";
import ChatComponent from "./Chat.svelte";

export default {
  component: VList,
} satisfies Meta;

export const Chat: StoryObj = {
  render: () => ({
    Component: ChatComponent,
  }),
};
