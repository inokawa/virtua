import type { Meta, StoryObj } from "@storybook/angular";
import { WindowVirtualizer } from "../../../src/angular";
import { WindowVirtualizerDemo } from "./WindowVirtualizer";

export default {
  component: WindowVirtualizer,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    template: `<story-window-virtualizer></story-window-virtualizer>`,
    moduleMetadata: { imports: [WindowVirtualizerDemo] },
  }),
};
