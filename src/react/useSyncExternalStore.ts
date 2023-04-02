import { useSyncExternalStore as _useSyncExternalStore } from "use-sync-external-store/shim";

export const useSyncExternalStore = <T>(
  subscibe: (onStoreChange: () => void) => () => void,
  getSnapShot: () => T
): T => {
  return _useSyncExternalStore(subscibe, getSnapShot, getSnapShot);
};
