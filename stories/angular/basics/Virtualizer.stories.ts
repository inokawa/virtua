import type { Meta, StoryObj } from "@storybook/angular";
import { Virtualizer } from "../../../src/angular";
import { HeaderAndFooterDemo } from "./HeaderAndFooter";
import { NestedDemo } from "./Nested";

export default {
  component: Virtualizer,
} satisfies Meta;

export const HeaderAndFooter: StoryObj = {
  render: () => ({
    template: `<story-header-and-footer></story-header-and-footer>`,
    moduleMetadata: { imports: [HeaderAndFooterDemo] },
  }),
};

export const Nested: StoryObj = {
  render: () => ({
    template: `<story-nested></story-nested>`,
    moduleMetadata: { imports: [NestedDemo] },
  }),
};
