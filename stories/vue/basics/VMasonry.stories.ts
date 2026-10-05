import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { VMasonry } from "../../../src/vue";
import DefaultComponent from "./VMasonryDefault.vue";
import ResponsiveComponent from "./VMasonryResponsive.vue";
import ScrollToComponent from "./VMasonryScrollTo.vue";

export default {
  component: VMasonry,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    components: { Component: DefaultComponent },
    template: "<Component />",
  }),
};

export const Responsive: StoryObj = {
  render: () => ({
    components: { Component: ResponsiveComponent },
    template: "<Component />",
  }),
};

export const ScrollTo: StoryObj = {
  render: () => ({
    components: { Component: ScrollToComponent },
    template: "<Component />",
  }),
};
