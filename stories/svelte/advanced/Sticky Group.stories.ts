import type { Meta, StoryObj } from "@storybook/svelte-vite";
import { VList } from "../../../src/svelte";
import StickyGroupComponent from "./StickyGroup.svelte";

export default {
  component: VList,
} satisfies Meta;

export const StickyGroup: StoryObj = {
  render: () => ({
    Component: StickyGroupComponent,
  }),
};
