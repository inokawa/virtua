import type { Meta, StoryObj } from "@storybook/vue3";
import { WindowVirtualizer } from "../../src/vue";
import DefaultComponent from "./WindowVirtualizer.vue";

export default {
  component: WindowVirtualizer,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    components: { Component: DefaultComponent },
    template: "<Component />",
  }),
};
