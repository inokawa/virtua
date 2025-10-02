function isCreateVNodeCall(path) {
  const calleePath = path.get("callee");
  for (const method of ["createVNode"]) {
    if (calleePath.referencesImport("vue", method)) {
      return true;
    }
  }
  return false;
}

/**
 * annotate argument of createVNode for terser
 */
export default ({ types: t }) => {
  return {
    name: "babel-plugin-annotate-vue-vnode",
    visitor: {
      CallExpression(path) {
        if (isCreateVNodeCall(path)) {
          const [type, props, children, patchFlag, dynamicProps] =
            path.get("arguments");
          if (dynamicProps && t.isArrayExpression(dynamicProps)) {
            dynamicProps.get("elements").forEach((e) => {
              if (e.node.value.startsWith("_")) {
                e.addComment("leading", "#__KEY__", false);
              }
            });
          }
        }
      },
    },
  };
};
