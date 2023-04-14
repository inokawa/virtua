import { useSyncExternalStore as _useSyncExternalStore } from "use-sync-external-store/shim/index.js";

export const useSyncExternalStore = <T>(
  subscibe: (onStoreChange: () => void) => () => void,
  getSnapShot: () => T
): T => {
  return _useSyncExternalStore(subscibe, getSnapShot, getSnapShot);
};
