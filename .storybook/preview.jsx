// for rtl testing
if (import.meta.env.STORYBOOK_RTL) {
  document.documentElement.dir = "rtl";
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  options: {
    storySort: {
      order: [
        "basics",
        ["VList", "WVList", "VGrid"],
        "advanced",
        "comparisons",
      ],
    },
  },
};
