import type { Meta, StoryObj } from "@storybook/angular";
import { WindowMasonry } from "../../../src/angular";
import { WindowMasonryDefaultDemo } from "./WindowMasonryDefault";

export default {
  component: WindowMasonry,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    template: `<story-window-masonry-default></story-window-masonry-default>`,
    moduleMetadata: { imports: [WindowMasonryDefaultDemo] },
  }),
};
