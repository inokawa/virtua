import { useSyncExternalStore as _useSyncExternalStore } from "use-sync-external-store/shim/index.js";

// https://github.com/facebook/react/issues/25191#issuecomment-1237456448
export const useSyncExternalStore = <T>(
  subscibe: (onStoreChange: () => void) => () => void,
  getSnapShot: () => T
): T => {
  return _useSyncExternalStore(subscibe, getSnapShot, getSnapShot);
};
