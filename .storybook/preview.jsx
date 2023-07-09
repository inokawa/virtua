export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  options: {
    storySort: {
      order: [
        "basics",
        ["VList", "VGrid", "WVList"],
        "advanced",
        "comparisons",
      ],
    },
  },
};
