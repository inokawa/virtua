import { readFileSync, writeFileSync } from "node:fs";

/**
 * @type { (arg:{dir:string}) => import('rollup').InputPluginOption }
 */
export const coreTsNoCheck = ({ coreDts }) => {
  return {
    name: "core-ts-nocheck",
    buildEnd: () => {
      writeFileSync(coreDts, "// @ts-nocheck\n" + readFileSync(coreDts));
    },
  };
};
