import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { VGrid } from "../../../src/svelte";
import DefaultComponent from "./VGridDefault.svelte";
import PinnedComponent from "./VGridPinned.svelte";
import ColumnsComponent from "./VGridColumns.svelte";
import ScrollToComponent from "./VGridScrollTo.svelte";

export default {
  component: VGrid,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    Component: DefaultComponent,
  }),
};

export const Pinned: StoryObj = {
  render: () => ({
    Component: PinnedComponent,
  }),
};

export const Columns: StoryObj = {
  render: () => ({
    Component: ColumnsComponent,
  }),
};

export const ScrollTo: StoryObj = {
  render: () => ({
    Component: ScrollToComponent,
  }),
};
