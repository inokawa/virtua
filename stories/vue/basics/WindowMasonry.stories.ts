import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { WindowMasonry } from "../../../src/vue";
import DefaultComponent from "./WindowMasonryDefault.vue";

export default {
  component: WindowMasonry,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    components: { Component: DefaultComponent },
    template:
      "<header style='padding: 32px'>Window-scrolled masonry</header><Component />",
  }),
};
