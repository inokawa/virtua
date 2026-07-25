import type { Meta, StoryObj } from "@storybook/angular";
import { VList } from "../../../src/angular";
import { ChatDemo } from "./Chat";

export default {
  component: VList,
} satisfies Meta;

export const Chat: StoryObj = {
  render: () => ({
    template: `<story-chat></story-chat>`,
    moduleMetadata: { imports: [ChatDemo] },
  }),
};
