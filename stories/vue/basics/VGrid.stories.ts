import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { VGrid } from "../../../src/vue";
import DefaultComponent from "./VGridDefault.vue";
import PinnedComponent from "./VGridPinned.vue";
import ColumnsComponent from "./VGridColumns.vue";
import ScrollToComponent from "./VGridScrollTo.vue";

export default {
  component: VGrid,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    components: { Component: DefaultComponent },
    template: "<Component />",
  }),
};

export const Pinned: StoryObj = {
  render: () => ({
    components: { Component: PinnedComponent },
    template: "<Component />",
  }),
};

export const Columns: StoryObj = {
  render: () => ({
    components: { Component: ColumnsComponent },
    template: "<Component />",
  }),
};

export const ScrollTo: StoryObj = {
  render: () => ({
    components: { Component: ScrollToComponent },
    template: "<Component />",
  }),
};
