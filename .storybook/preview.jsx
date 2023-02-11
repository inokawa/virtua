export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const decorators = [
  (Story) => (
    <div style={{ background: "whitesmoke", padding: 10 }}>
      <Story />
    </div>
  ),
];
