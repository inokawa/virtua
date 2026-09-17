import type { Meta, StoryObj } from "@storybook/angular";
import { VGrid } from "../../../src/angular";
import { VGridDefaultDemo } from "./VGridDefault";
import { VGridPinnedDemo } from "./VGridPinned";
import { VGridColumnsDemo } from "./VGridColumns";
import { VGridScrollToDemo } from "./VGridScrollTo";

export default {
  component: VGrid,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    template: `<story-vgrid-default></story-vgrid-default>`,
    moduleMetadata: { imports: [VGridDefaultDemo] },
  }),
};

export const Pinned: StoryObj = {
  render: () => ({
    template: `<story-vgrid-pinned></story-vgrid-pinned>`,
    moduleMetadata: { imports: [VGridPinnedDemo] },
  }),
};

export const Columns: StoryObj = {
  render: () => ({
    template: `<story-vgrid-columns></story-vgrid-columns>`,
    moduleMetadata: { imports: [VGridColumnsDemo] },
  }),
};

export const ScrollTo: StoryObj = {
  render: () => ({
    template: `<story-vgrid-scroll-to></story-vgrid-scroll-to>`,
    moduleMetadata: { imports: [VGridScrollToDemo] },
  }),
};
