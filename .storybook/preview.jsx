export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
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
