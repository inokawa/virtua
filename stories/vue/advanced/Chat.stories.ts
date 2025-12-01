import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { VList } from "../../../src/vue";
import ChatComponent from "../advanced/Chat.vue";

export default {
  component: VList,
} satisfies Meta;

export const Chat: StoryObj = {
  render: () => ({
    components: { Component: ChatComponent },
    template: "<Component />",
  }),
};
