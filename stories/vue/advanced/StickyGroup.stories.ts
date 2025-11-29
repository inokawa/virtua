import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { VList } from "../../../src/vue";
import StickyGroupComponent from "../advanced/StickyGroup.vue";

export default {
  component: VList,
} satisfies Meta;

export const StickyGroup: StoryObj = {
  render: () => ({
    components: { Component: StickyGroupComponent },
    template: "<Component />",
  }),
};
