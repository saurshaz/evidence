import { d as dev } from "./index3.js";
import { w as writable } from "./index2.js";
const pageHasQueries = writable(true);
const routeHash = writable("");
function createToastsObject() {
  const { subscribe, update } = writable([]);
  const timeoutMap = /* @__PURE__ */ new Map();
  const removeToast = (id) => {
    update(($toasts) => $toasts.filter((existing) => existing.id !== id));
  };
  return {
    subscribe,
    /**
     *
     * @param {Toast} toast
     * @param {number} [timeout]
     */
    add: (toast, timeout = 2e3) => {
      toast.id = toast.id ?? Math.random().toString();
      update(($toasts) => {
        const existing = $toasts.find((t) => t.id === toast.id);
        if (existing) {
          Object.assign(existing, toast);
          if (timeoutMap.has(toast.id)) {
            clearTimeout(timeoutMap.get(toast.id));
            timeoutMap.delete(toast.id);
          }
        } else {
          $toasts.push(toast);
        }
        return $toasts;
      });
      if (timeout) {
        const timeoutId = setTimeout(() => {
          removeToast(toast.id);
          timeoutMap.delete(toast.id);
        }, timeout);
        timeoutMap.set(toast.id, timeoutId);
      }
    },
    dismiss: (toastId) => {
      removeToast(toastId);
      if (timeoutMap.has(toastId)) {
        clearTimeout(timeoutMap.get(toastId));
        timeoutMap.delete[toastId];
      }
    }
  };
}
const toasts = createToastsObject();
const getStoreVal = (store) => {
  let v;
  store.subscribe((x) => v = x)();
  return v;
};
const localStorageStore = (key, init) => {
  const store = writable(init);
  const { subscribe, set } = store;
  const flush = (v) => {
  };
  flush(getStoreVal(store));
  return {
    subscribe,
    set: (v) => {
      set(v);
    },
    update: (cb) => {
      const updatedStore = cb(getStoreVal(store));
      set(updatedStore);
    }
  };
};
const showQueries = localStorageStore("showQueries", dev);
export {
  localStorageStore as l,
  pageHasQueries as p,
  routeHash as r,
  showQueries as s,
  toasts as t
};
