import type { Meta, StoryObj } from "@storybook/angular";
import { VList } from "../../../src/angular";
import { DefaultDemo } from "./Default";
import { HorizontalDemo } from "./Horizontal";
import { ControlsDemo } from "./Controls";

export default {
  component: VList,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => ({
    template: `<story-default></story-default>`,
    moduleMetadata: { imports: [DefaultDemo] },
  }),
};

export const Horizontal: StoryObj = {
  render: () => ({
    template: `<story-horizontal></story-horizontal>`,
    moduleMetadata: { imports: [HorizontalDemo] },
  }),
};

export const Controls: StoryObj = {
  render: () => ({
    template: `<story-controls></story-controls>`,
    moduleMetadata: { imports: [ControlsDemo] },
  }),
};
