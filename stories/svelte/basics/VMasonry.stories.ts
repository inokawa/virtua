import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { VMasonry } from "../../../src/svelte";
import DefaultComponent from "./VMasonryDefault.svelte";
import ScrollToComponent from "./VMasonryScrollTo.svelte";

export default {
  component: VMasonry,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    Component: DefaultComponent,
  }),
};

export const ScrollTo: StoryObj = {
  render: () => ({
    Component: ScrollToComponent,
  }),
};
