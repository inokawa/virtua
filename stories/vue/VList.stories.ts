import type { Meta, StoryObj } from "@storybook/vue3";
import { VList } from "../../src/vue";
import BasicComponent from "./Basic.vue";

export default {
  component: VList,
} satisfies Meta;

export const Basic: StoryObj = {
  render: () => ({
    components: { Basic: BasicComponent },
    template: "<Basic />",
  }),
};
