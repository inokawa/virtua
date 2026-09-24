import type { Meta, StoryObj } from "@storybook/angular";
import { VMasonry } from "../../../src/angular";
import { VMasonryDefaultDemo } from "./VMasonryDefault";
import { VMasonryScrollToDemo } from "./VMasonryScrollTo";

export default {
  component: VMasonry,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    template: `<story-vmasonry-default></story-vmasonry-default>`,
    moduleMetadata: { imports: [VMasonryDefaultDemo] },
  }),
};

export const ScrollTo: StoryObj = {
  render: () => ({
    template: `<story-vmasonry-scroll-to></story-vmasonry-scroll-to>`,
    moduleMetadata: { imports: [VMasonryScrollToDemo] },
  }),
};
