import type { Meta, StoryObj } from "@storybook/vue3";
import { Virtualizer } from "../../src/vue";
import HeaderAndFooterComponent from "./HeaderAndFooter.vue";
import NestedComponent from "./Nested.vue";

export default {
  component: Virtualizer,
} satisfies Meta;

export const HeaderAndFooter: StoryObj = {
  render: () => ({
    components: { Component: HeaderAndFooterComponent },
    template: "<Component />",
  }),
};

export const Nested: StoryObj = {
  render: () => ({
    components: { Component: NestedComponent },
    template: "<Component />",
  }),
};
