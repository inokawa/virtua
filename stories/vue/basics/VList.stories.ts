import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { VList } from "../../../src/vue";
import DefaultComponent from "./Default.vue";
import HorizontalComponent from "./Horizontal.vue";
import ControllsComponent from "./Controlls.vue";

export default {
  component: VList,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    components: { Component: DefaultComponent },
    template: "<Component />",
  }),
};

export const Horizontal: StoryObj = {
  render: () => ({
    components: { Component: HorizontalComponent },
    template: "<Component />",
  }),
};

export const Controlls: StoryObj = {
  render: () => ({
    components: { Component: ControllsComponent },
    template: "<Component />",
  }),
};
