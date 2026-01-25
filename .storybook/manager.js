import { addons } from "storybook/manager-api";

addons.setConfig({
  panelPosition: "right",
  selectedPanel: "storybook/docs/panel",
  layoutCustomisations: {
    showPanel: (state, defaultValue) => {
      const tags = state.index?.[state.storyId]?.tags ?? [];
      if (tags.includes("comparison")) {
        return false;
      }
      return defaultValue;
    },
  },
});
