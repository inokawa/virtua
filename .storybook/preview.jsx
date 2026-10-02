// for rtl testing
if (import.meta.env.STORYBOOK_RTL) {
  document.documentElement.dir = "rtl";
}
/** @type { import('@storybook/react-vite').Preview } */
export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    options: {
      storySort: {
        order: [
          "basics",
          ["VList", "Virtualizer", "WindowVirtualizer", "VGrid"],
          "advanced",
          "comparisons",
        ],
      },
    },
    docs: {
      codePanel: true,
    },
  },
};
