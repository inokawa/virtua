// for esbuild-loader
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  options: {
    storySort: {
      order: ["basics", "advanced", "comparisons"],
    },
  },
};

export const decorators = [
  (Story) => (
    <div
      style={{
        background: "whitesmoke",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Story />
    </div>
  ),
];
