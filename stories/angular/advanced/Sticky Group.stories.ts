import type { Meta, StoryObj } from "@storybook/angular";
import { VList } from "../../../src/angular";
import { StickyGroupDemo } from "./StickyGroup";

export default {
  component: VList,
} satisfies Meta;

export const StickyGroup: StoryObj = {
  render: () => ({
    template: `<story-sticky-group></story-sticky-group>`,
    moduleMetadata: { imports: [StickyGroupDemo] },
  }),
};
