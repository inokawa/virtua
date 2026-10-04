import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { VMasonry } from "../../../src/svelte";
import DefaultComponent from "./VMasonryDefault.svelte";
import MediaQueriesComponent from "./VMasonryMediaQueries.svelte";
import ScrollToComponent from "./VMasonryScrollTo.svelte";

export default {
  component: VMasonry,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    Component: DefaultComponent,
  }),
};

export const MediaQueries: StoryObj = {
  render: () => ({
    Component: MediaQueriesComponent,
  }),
};

export const ScrollTo: StoryObj = {
  render: () => ({
    Component: ScrollToComponent,
  }),
};
