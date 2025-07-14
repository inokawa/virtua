// for rtl testing
if (import.meta.env.STORYBOOK_RTL) {
  document.documentElement.dir = "rtl";
}
// for e2e
if (import.meta.env.STORYBOOK_E2E) {
  const style = document.createElement("style");
  // elements with `pointer-events: none` can't be found by document.elementFromPoint()
  style.appendChild(
    document.createTextNode(
      `* { 
        pointer-events: auto !important;
      }`
    )
  );
  document.head.appendChild(style);
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
  },
};
