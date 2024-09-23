import { c as create_ssr_component, a as spread, e as escape_attribute_value, b as escape_object, d as add_attribute, g as getContext, s as setContext, v as validate_component, f as createEventDispatcher, h as escape, i as each, o as onDestroy } from "../../chunks/ssr.js";
import { n as noop, i as isBrowser, a as isHTMLElement, w as withGet, b as isFunction, c as isElement, u as useEscapeKeydown, e as executeCallbacks, d as addEventListener, m as makeElement, s as styleToString, p as portalAttr, f as effect, g as addMeltEventListener, F as FIRST_LAST_KEYS, k as kbd, S as SELECTION_KEYS, h as isElementDisabled, j as safeOnMount, l as createElHelpers, o as disabledAttr, q as omit, r as cn, t as buttonVariants, v as flyAndScale, I as Icon } from "../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";
import { t as toasts, s as showQueries } from "../../chunks/stores.js";
import "@evidence-dev/sdk/usql";
import "ssf";
import "../../chunks/inferColumnTypes.js";
import "@tidyjs/tidy";
import "@uwdata/mosaic-sql";
import "@evidence-dev/universal-sql/client-duckdb";
import "export-to-csv";
import "chroma-js";
import "lodash.debounce";
import "devalue";
import "yaml";
import "@astronautlabs/jsonpath";
import "dequal";
import "tua-body-scroll-lock";
import { g as get_store_value, c as compute_rest_props, s as subscribe, n as null_to_empty } from "../../chunks/utils.js";
import { p as page, n as navigating } from "../../chunks/stores2.js";
import { d as dev } from "../../chunks/index3.js";
import { D as Dots, X, M as Menu2, C as ChevronRight } from "../../chunks/index4.js";
import { t as tick, a as toWritableStores, g as generateIds, o as overridable, c as createBitAttrs, r as removeUndefined, b as getOptionUpdater, d as createDispatcher, e as disabledAttrs } from "../../chunks/updater.js";
import { d as derived, w as writable, a as readonly } from "../../chunks/index2.js";
import { flip, offset, shift, arrow, size, autoUpdate, computePosition } from "@floating-ui/dom";
import { createFocusTrap as createFocusTrap$1 } from "focus-trap";
import { nanoid } from "nanoid/non-secure";
import "echarts";
import "debounce";
import "downloadjs";
import "echarts-stat";
import "@evidence-dev/sdk/utils";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function last(array) {
  return array[array.length - 1];
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function addHighlight(element) {
  element.setAttribute("data-highlighted", "");
}
function removeHighlight(element) {
  element.removeAttribute("data-highlighted");
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function debounce(fn, wait = 500) {
  let timeout = null;
  return function(...args) {
    const later = () => {
      timeout = null;
      fn(...args);
    };
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
const pt = (v) => isDom() && v.test(getPlatform().toLowerCase());
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const isMac = () => pt(/^mac/) && !isTouchDevice();
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isIos = () => isApple() && !isMac();
const LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
  if (!el)
    return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
}
function setCSSProperty(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
  const doc = document;
  const win = doc.defaultView ?? window;
  const { documentElement, body } = doc;
  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked)
    return noop;
  body.setAttribute(LOCK_CLASSNAME, "");
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  const setStyle = () => assignStyle(body, {
    overflow: "hidden",
    [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
  });
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win;
    const offsetLeft = visualViewport?.offsetLeft ?? 0;
    const offsetTop = visualViewport?.offsetTop ?? 0;
    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
    });
    return () => {
      restoreStyle?.();
      win.scrollTo(scrollX, scrollY);
    };
  };
  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
  };
}
function derivedVisible(obj) {
  const { open, forceVisible, activeTrigger } = obj;
  return derived([open, forceVisible, activeTrigger], ([$open, $forceVisible, $activeTrigger]) => ($open || $forceVisible) && $activeTrigger !== null);
}
function handleRovingFocus(nextElement) {
  if (!isBrowser)
    return;
  sleep(1).then(() => {
    const currentFocusedElement = document.activeElement;
    if (!isHTMLElement(currentFocusedElement) || currentFocusedElement === nextElement)
      return;
    currentFocusedElement.tabIndex = -1;
    if (nextElement) {
      nextElement.tabIndex = 0;
      nextElement.focus();
    }
  });
}
function getFocusableElements() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function getNextFocusable(currentElement) {
  const focusableElements = getFocusableElements();
  const currentIndex = focusableElements.indexOf(currentElement);
  const nextIndex = currentIndex + 1;
  const nextElement = focusableElements[nextIndex];
  if (nextIndex < focusableElements.length && isHTMLElement(nextElement)) {
    return nextElement;
  }
  return null;
}
function getPreviousFocusable(currentElement) {
  const focusableElements = getFocusableElements();
  const currentIndex = focusableElements.indexOf(currentElement);
  const previousIndex = currentIndex - 1;
  const prevElement = focusableElements[previousIndex];
  if (previousIndex >= 0 && isHTMLElement(prevElement)) {
    return prevElement;
  }
  return null;
}
const ignoredKeys = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock"]);
const defaults$3 = {
  onMatch: handleRovingFocus,
  getCurrentItem: () => document.activeElement
};
function createTypeaheadSearch(args = {}) {
  const withDefaults = { ...defaults$3, ...args };
  const typed = withGet(writable([]));
  const resetTyped = debounce(() => {
    typed.update(() => []);
  });
  const handleTypeaheadSearch = (key, items) => {
    if (ignoredKeys.has(key))
      return;
    const currentItem = withDefaults.getCurrentItem();
    const $typed = get_store_value(typed);
    if (!Array.isArray($typed)) {
      return;
    }
    $typed.push(key.toLowerCase());
    typed.set($typed);
    const candidateItems = items.filter((item) => {
      if (item.getAttribute("disabled") === "true" || item.getAttribute("aria-disabled") === "true" || item.hasAttribute("data-disabled")) {
        return false;
      }
      return true;
    });
    const isRepeated = $typed.length > 1 && $typed.every((char) => char === $typed[0]);
    const normalizeSearch = isRepeated ? $typed[0] : $typed.join("");
    const currentItemIndex = isHTMLElement(currentItem) ? candidateItems.indexOf(currentItem) : -1;
    let wrappedItems = wrapArray(candidateItems, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizeSearch.length === 1;
    if (excludeCurrentItem) {
      wrappedItems = wrappedItems.filter((v) => v !== currentItem);
    }
    const nextItem = wrappedItems.find((item) => item?.innerText && item.innerText.toLowerCase().startsWith(normalizeSearch.toLowerCase()));
    if (isHTMLElement(nextItem) && nextItem !== currentItem) {
      withDefaults.onMatch(nextItem);
    }
    resetTyped();
  };
  return {
    typed,
    resetTyped,
    handleTypeaheadSearch
  };
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  if (portalProp !== void 0)
    return portalProp;
  const portalParent = getPortalParent(node);
  if (portalParent === "body")
    return document.body;
  return null;
}
async function handleFocus(args) {
  const { prop, defaultEl } = args;
  await Promise.all([sleep(1), tick]);
  if (prop === void 0) {
    defaultEl?.focus();
    return;
  }
  const returned = isFunction(prop) ? prop(defaultEl) : prop;
  if (typeof returned === "string") {
    const el = document.querySelector(returned);
    if (!isHTMLElement(el))
      return;
    el.focus();
  } else if (isHTMLElement(returned)) {
    returned.focus();
  }
}
const defaultConfig$1 = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: true,
  sameWidth: false,
  overflowPadding: 8
};
const ARROW_TRANSFORM = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function useFloating(reference, floating, opts = {}) {
  if (!floating || !reference || opts === null)
    return {
      destroy: noop
    };
  const options = { ...defaultConfig$1, ...opts };
  const arrowEl = floating.querySelector("[data-arrow=true]");
  const middleware = [];
  if (options.flip) {
    middleware.push(flip({
      boundary: options.boundary,
      padding: options.overflowPadding
    }));
  }
  const arrowOffset = isHTMLElement(arrowEl) ? arrowEl.offsetHeight / 2 : 0;
  if (options.gutter || options.offset) {
    const data = options.gutter ? { mainAxis: options.gutter } : options.offset;
    if (data?.mainAxis != null) {
      data.mainAxis += arrowOffset;
    }
    middleware.push(offset(data));
  }
  middleware.push(shift({
    boundary: options.boundary,
    crossAxis: options.overlap,
    padding: options.overflowPadding
  }));
  if (arrowEl) {
    middleware.push(arrow({ element: arrowEl, padding: 8 }));
  }
  middleware.push(size({
    padding: options.overflowPadding,
    apply({ rects, availableHeight, availableWidth }) {
      if (options.sameWidth) {
        Object.assign(floating.style, {
          width: `${Math.round(rects.reference.width)}px`,
          minWidth: "unset"
        });
      }
      if (options.fitViewport) {
        Object.assign(floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`
        });
      }
    }
  }));
  function compute() {
    if (!reference || !floating)
      return;
    if (isHTMLElement(reference) && !reference.ownerDocument.documentElement.contains(reference))
      return;
    const { placement, strategy } = options;
    computePosition(reference, floating, {
      placement,
      middleware,
      strategy
    }).then((data) => {
      const x = Math.round(data.x);
      const y = Math.round(data.y);
      const [side, align] = getSideAndAlignFromPlacement(data.placement);
      floating.setAttribute("data-side", side);
      floating.setAttribute("data-align", align);
      Object.assign(floating.style, {
        position: options.strategy,
        top: `${y}px`,
        left: `${x}px`
      });
      if (isHTMLElement(arrowEl) && data.middlewareData.arrow) {
        const { x: x2, y: y2 } = data.middlewareData.arrow;
        const dir = data.placement.split("-")[0];
        arrowEl.setAttribute("data-side", dir);
        Object.assign(arrowEl.style, {
          position: "absolute",
          left: x2 != null ? `${x2}px` : "",
          top: y2 != null ? `${y2}px` : "",
          [dir]: `calc(100% - ${arrowOffset}px)`,
          transform: ARROW_TRANSFORM[dir],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return data;
    });
  }
  Object.assign(floating.style, {
    position: options.strategy
  });
  return {
    destroy: autoUpdate(reference, floating, compute)
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function createFocusTrap(config = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = config;
  const hasFocus = writable(false);
  const isPaused = writable(false);
  const activate = (opts) => trap?.activate(opts);
  const deactivate = (opts) => {
    trap?.deactivate(opts);
  };
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.set(true);
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.set(false);
    }
  };
  const useFocusTrap = (node) => {
    trap = createFocusTrap$1(node, {
      ...focusTrapOptions,
      onActivate() {
        hasFocus.set(true);
        config.onActivate?.();
      },
      onDeactivate() {
        hasFocus.set(false);
        config.onDeactivate?.();
      }
    });
    if (immediate) {
      activate();
    }
    return {
      destroy() {
        deactivate();
        trap = void 0;
      }
    };
  };
  return {
    useFocusTrap,
    hasFocus: readonly(hasFocus),
    isPaused: readonly(isPaused),
    activate,
    deactivate,
    pause,
    unpause
  };
}
const visibleModals = [];
const useModal = (node, config) => {
  let unsubInteractOutside = noop;
  function removeNodeFromVisibleModals() {
    const index = visibleModals.indexOf(node);
    if (index >= 0) {
      visibleModals.splice(index, 1);
    }
  }
  function update(config2) {
    unsubInteractOutside();
    const { open, onClose, shouldCloseOnInteractOutside, closeOnInteractOutside } = config2;
    sleep(100).then(() => {
      if (open) {
        visibleModals.push(node);
      } else {
        removeNodeFromVisibleModals();
      }
    });
    function isLastModal() {
      return last(visibleModals) === node;
    }
    function closeModal() {
      if (isLastModal() && onClose) {
        onClose();
        removeNodeFromVisibleModals();
      }
    }
    function onInteractOutsideStart(e) {
      const target = e.target;
      if (!isElement(target))
        return;
      if (target && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
    function onInteractOutside(e) {
      if (shouldCloseOnInteractOutside?.(e) && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        closeModal();
      }
    }
    unsubInteractOutside = useInteractOutside(node, {
      onInteractOutsideStart,
      onInteractOutside: closeOnInteractOutside ? onInteractOutside : void 0,
      enabled: open
    }).destroy;
  }
  update(config);
  return {
    update,
    destroy() {
      removeNodeFromVisibleModals();
      unsubInteractOutside();
    }
  };
};
const defaultConfig = {
  floating: {},
  focusTrap: {},
  modal: {},
  escapeKeydown: {},
  portal: "body"
};
const usePopper = (popperElement, args) => {
  popperElement.dataset.escapee = "";
  const { anchorElement, open, options } = args;
  if (!anchorElement || !open || !options) {
    return { destroy: noop };
  }
  const opts = { ...defaultConfig, ...options };
  const callbacks = [];
  if (opts.portal !== null) {
    callbacks.push(usePortal(popperElement, opts.portal).destroy);
  }
  callbacks.push(useFloating(anchorElement, popperElement, opts.floating).destroy);
  if (opts.focusTrap !== null) {
    const { useFocusTrap } = createFocusTrap({
      immediate: true,
      escapeDeactivates: false,
      allowOutsideClick: true,
      returnFocusOnDeactivate: false,
      fallbackFocus: popperElement,
      ...opts.focusTrap
    });
    callbacks.push(useFocusTrap(popperElement).destroy);
  }
  if (opts.modal !== null) {
    callbacks.push(useModal(popperElement, {
      onClose: () => {
        if (isHTMLElement(anchorElement)) {
          open.set(false);
          anchorElement.focus();
        }
      },
      shouldCloseOnInteractOutside: (e) => {
        if (e.defaultPrevented)
          return false;
        if (isHTMLElement(anchorElement) && anchorElement.contains(e.target)) {
          return false;
        }
        return true;
      },
      ...opts.modal
    }).destroy);
  }
  if (opts.escapeKeydown !== null) {
    callbacks.push(useEscapeKeydown(popperElement, {
      enabled: open,
      handler: () => {
        open.set(false);
      },
      ...opts.escapeKeydown
    }).destroy);
  }
  const unsubscribe = executeCallbacks(...callbacks);
  return {
    destroy() {
      unsubscribe();
    }
  };
};
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update(target);
  return {
    update,
    destroy
  };
};
const useInteractOutside = (node, config) => {
  let unsub = noop;
  let unsubClick = noop;
  let isPointerDown = false;
  let isPointerDownInside = false;
  let ignoreEmulatedMouseEvents = false;
  function update(config2) {
    unsub();
    unsubClick();
    const { onInteractOutside, onInteractOutsideStart, enabled } = config2;
    if (!enabled)
      return;
    function onPointerDown(e) {
      if (onInteractOutside && isValidEvent(e, node)) {
        onInteractOutsideStart?.(e);
      }
      const target = e.target;
      if (isElement(target) && isOrContainsTarget(node, target)) {
        isPointerDownInside = true;
      }
      isPointerDown = true;
    }
    function triggerInteractOutside(e) {
      onInteractOutside?.(e);
    }
    const documentObj = getOwnerDocument(node);
    if (typeof PointerEvent !== "undefined") {
      const onPointerUp = (e) => {
        unsubClick();
        const handler = (e2) => {
          if (shouldTriggerInteractOutside(e2)) {
            triggerInteractOutside(e2);
          }
          resetPointerState();
        };
        if (e.pointerType === "touch") {
          unsubClick = addEventListener(documentObj, "click", handler, {
            capture: true,
            once: true
          });
          return;
        }
        handler(e);
      };
      unsub = executeCallbacks(addEventListener(documentObj, "pointerdown", onPointerDown, true), addEventListener(documentObj, "pointerup", onPointerUp, true));
    } else {
      const onMouseUp = (e) => {
        if (ignoreEmulatedMouseEvents) {
          ignoreEmulatedMouseEvents = false;
        } else if (shouldTriggerInteractOutside(e)) {
          triggerInteractOutside(e);
        }
        resetPointerState();
      };
      const onTouchEnd = (e) => {
        ignoreEmulatedMouseEvents = true;
        if (shouldTriggerInteractOutside(e)) {
          triggerInteractOutside(e);
        }
        resetPointerState();
      };
      unsub = executeCallbacks(addEventListener(documentObj, "mousedown", onPointerDown, true), addEventListener(documentObj, "mouseup", onMouseUp, true), addEventListener(documentObj, "touchstart", onPointerDown, true), addEventListener(documentObj, "touchend", onTouchEnd, true));
    }
  }
  function shouldTriggerInteractOutside(e) {
    if (isPointerDown && !isPointerDownInside && isValidEvent(e, node)) {
      return true;
    }
    return false;
  }
  function resetPointerState() {
    isPointerDown = false;
    isPointerDownInside = false;
  }
  update(config);
  return {
    update,
    destroy() {
      unsub();
      unsubClick();
    }
  };
};
function isValidEvent(e, node) {
  if ("button" in e && e.button > 0)
    return false;
  const target = e.target;
  if (!isElement(target))
    return false;
  const ownerDocument = target.ownerDocument;
  if (!ownerDocument || !ownerDocument.documentElement.contains(target)) {
    return false;
  }
  return node && !isOrContainsTarget(node, target);
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return el?.ownerDocument ?? document;
}
const SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, kbd.ARROW_RIGHT],
  rtl: [...SELECTION_KEYS, kbd.ARROW_LEFT]
};
const SUB_CLOSE_KEYS = {
  ltr: [kbd.ARROW_LEFT],
  rtl: [kbd.ARROW_RIGHT]
};
const menuIdParts = ["menu", "trigger"];
const defaults$2 = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  portal: void 0,
  loop: false,
  dir: "ltr",
  defaultOpen: false,
  typeahead: true,
  closeOnItemClick: true,
  onOutsideClick: void 0
};
function createMenuBuilder(opts) {
  const { name, selector } = createElHelpers(opts.selector);
  const { preventScroll, arrowSize, positioning, closeOnEscape, closeOnOutsideClick, portal, forceVisible, typeahead, loop, closeFocus, disableFocusFirstItem, closeOnItemClick, onOutsideClick } = opts.rootOptions;
  const rootOpen = opts.rootOpen;
  const rootActiveTrigger = opts.rootActiveTrigger;
  const nextFocusable = opts.nextFocusable;
  const prevFocusable = opts.prevFocusable;
  const isUsingKeyboard = withGet.writable(false);
  const lastPointerX = withGet(writable(0));
  const pointerGraceIntent = withGet(writable(null));
  const pointerDir = withGet(writable("right"));
  const currentFocusedItem = withGet(writable(null));
  const pointerMovingToSubmenu = withGet(derived([pointerDir, pointerGraceIntent], ([$pointerDir, $pointerGraceIntent]) => {
    return (e) => {
      const isMovingTowards = $pointerDir === $pointerGraceIntent?.side;
      return isMovingTowards && isPointerInGraceArea(e, $pointerGraceIntent?.area);
    };
  }));
  const { typed, handleTypeaheadSearch } = createTypeaheadSearch();
  const rootIds = toWritableStores({ ...generateIds(menuIdParts), ...opts.ids });
  const isVisible = derivedVisible({
    open: rootOpen,
    forceVisible,
    activeTrigger: rootActiveTrigger
  });
  const rootMenu = makeElement(name(), {
    stores: [isVisible, portal, rootIds.menu, rootIds.trigger],
    returned: ([$isVisible, $portal, $rootMenuId, $rootTriggerId]) => {
      return {
        role: "menu",
        hidden: $isVisible ? void 0 : true,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        id: $rootMenuId,
        "aria-labelledby": $rootTriggerId,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": portalAttr($portal),
        tabindex: -1
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubDerived = effect([isVisible, rootActiveTrigger, positioning, closeOnOutsideClick, portal, closeOnEscape], ([$isVisible, $rootActiveTrigger, $positioning, $closeOnOutsideClick, $portal, $closeOnEscape]) => {
        unsubPopper();
        if (!$isVisible || !$rootActiveTrigger)
          return;
        tick().then(() => {
          unsubPopper();
          setMeltMenuAttribute(node, selector);
          unsubPopper = usePopper(node, {
            anchorElement: $rootActiveTrigger,
            open: rootOpen,
            options: {
              floating: $positioning,
              modal: {
                closeOnInteractOutside: $closeOnOutsideClick,
                shouldCloseOnInteractOutside: (e) => {
                  onOutsideClick.get()?.(e);
                  if (e.defaultPrevented)
                    return false;
                  if (isHTMLElement($rootActiveTrigger) && $rootActiveTrigger.contains(e.target)) {
                    return false;
                  }
                  return true;
                },
                onClose: () => {
                  rootOpen.set(false);
                  $rootActiveTrigger.focus();
                },
                open: $isVisible
              },
              portal: getPortalDestination(node, $portal),
              escapeKeydown: $closeOnEscape ? void 0 : null
            }
          }).destroy;
        });
      });
      const unsubEvents = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
        const target = e.target;
        const menuEl = e.currentTarget;
        if (!isHTMLElement(target) || !isHTMLElement(menuEl))
          return;
        const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
        if (!isKeyDownInside)
          return;
        if (FIRST_LAST_KEYS.includes(e.key)) {
          handleMenuNavigation(e, loop.get() ?? false);
        }
        if (e.key === kbd.TAB) {
          e.preventDefault();
          rootOpen.set(false);
          handleTabNavigation(e, nextFocusable, prevFocusable);
          return;
        }
        const isCharacterKey = e.key.length === 1;
        const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
        if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
          handleTypeaheadSearch(e.key, getMenuItems(menuEl));
        }
      }));
      return {
        destroy() {
          unsubDerived();
          unsubEvents();
          unsubPopper();
        }
      };
    }
  });
  const rootTrigger = makeElement(name("trigger"), {
    stores: [rootOpen, rootIds.menu, rootIds.trigger],
    returned: ([$rootOpen, $rootMenuId, $rootTriggerId]) => {
      return {
        "aria-controls": $rootMenuId,
        "aria-expanded": $rootOpen,
        "data-state": $rootOpen ? "open" : "closed",
        id: $rootTriggerId,
        tabindex: 0
      };
    },
    action: (node) => {
      applyAttrsIfDisabled(node);
      rootActiveTrigger.update((p) => {
        if (p)
          return p;
        return node;
      });
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        const $rootOpen = rootOpen.get();
        const triggerEl = e.currentTarget;
        if (!isHTMLElement(triggerEl))
          return;
        handleOpen(triggerEl);
        if (!$rootOpen)
          e.preventDefault();
      }), addMeltEventListener(node, "keydown", (e) => {
        const triggerEl = e.currentTarget;
        if (!isHTMLElement(triggerEl))
          return;
        if (!(SELECTION_KEYS.includes(e.key) || e.key === kbd.ARROW_DOWN))
          return;
        e.preventDefault();
        handleOpen(triggerEl);
        const menuId = triggerEl.getAttribute("aria-controls");
        if (!menuId)
          return;
        const menu = document.getElementById(menuId);
        if (!menu)
          return;
        const menuItems = getMenuItems(menu);
        if (!menuItems.length)
          return;
        handleRovingFocus(menuItems[0]);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const rootArrow = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  const overlay = makeElement(name("overlay"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": "true",
        "data-state": stateAttr($isVisible)
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      if (closeOnEscape.get()) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            rootOpen.set(false);
            const $rootActiveTrigger = rootActiveTrigger.get();
            if ($rootActiveTrigger)
              $rootActiveTrigger.focus();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      const unsubPortal = effect([portal], ([$portal]) => {
        if ($portal === null)
          return noop;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return noop;
        return usePortal(node, portalDestination).destroy;
      });
      return {
        destroy() {
          unsubEscapeKeydown();
          unsubPortal();
        }
      };
    }
  });
  const item = makeElement(name("item"), {
    returned: () => {
      return {
        role: "menuitem",
        tabindex: -1,
        "data-orientation": "vertical"
      };
    },
    action: (node) => {
      setMeltMenuAttribute(node, selector);
      applyAttrsIfDisabled(node);
      const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
        const itemEl = e.currentTarget;
        if (!isHTMLElement(itemEl))
          return;
        if (isElementDisabled(itemEl)) {
          e.preventDefault();
          return;
        }
      }), addMeltEventListener(node, "click", (e) => {
        const itemEl = e.currentTarget;
        if (!isHTMLElement(itemEl))
          return;
        if (isElementDisabled(itemEl)) {
          e.preventDefault();
          return;
        }
        if (e.defaultPrevented) {
          handleRovingFocus(itemEl);
          return;
        }
        if (closeOnItemClick.get()) {
          sleep(1).then(() => {
            rootOpen.set(false);
          });
        }
      }), addMeltEventListener(node, "keydown", (e) => {
        onItemKeyDown(e);
      }), addMeltEventListener(node, "pointermove", (e) => {
        onMenuItemPointerMove(e);
      }), addMeltEventListener(node, "pointerleave", (e) => {
        onMenuItemPointerLeave(e);
      }), addMeltEventListener(node, "focusin", (e) => {
        onItemFocusIn(e);
      }), addMeltEventListener(node, "focusout", (e) => {
        onItemFocusOut(e);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const group = makeElement(name("group"), {
    returned: () => {
      return (groupId) => ({
        role: "group",
        "aria-labelledby": groupId
      });
    }
  });
  const groupLabel = makeElement(name("group-label"), {
    returned: () => {
      return (groupId) => ({
        id: groupId
      });
    }
  });
  const checkboxItemDefaults = {
    defaultChecked: false,
    disabled: false
  };
  const createCheckboxItem = (props) => {
    const withDefaults = { ...checkboxItemDefaults, ...props };
    const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked ?? null);
    const checked = overridable(checkedWritable, withDefaults.onCheckedChange);
    const disabled = writable(withDefaults.disabled);
    const checkboxItem = makeElement(name("checkbox-item"), {
      stores: [checked, disabled],
      returned: ([$checked, $disabled]) => {
        return {
          role: "menuitemcheckbox",
          tabindex: -1,
          "data-orientation": "vertical",
          "aria-checked": isIndeterminate($checked) ? "mixed" : $checked ? "true" : "false",
          "data-disabled": disabledAttr($disabled),
          "data-state": getCheckedState($checked)
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        applyAttrsIfDisabled(node);
        const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            e.preventDefault();
            return;
          }
        }), addMeltEventListener(node, "click", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            e.preventDefault();
            return;
          }
          if (e.defaultPrevented) {
            handleRovingFocus(itemEl);
            return;
          }
          checked.update((prev) => {
            if (isIndeterminate(prev))
              return true;
            return !prev;
          });
          if (closeOnItemClick.get()) {
            tick().then(() => {
              rootOpen.set(false);
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          onItemKeyDown(e);
        }), addMeltEventListener(node, "pointermove", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            onItemLeave(e);
            return;
          }
          onMenuItemPointerMove(e, itemEl);
        }), addMeltEventListener(node, "pointerleave", (e) => {
          onMenuItemPointerLeave(e);
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          onItemFocusOut(e);
        }));
        return {
          destroy: unsub
        };
      }
    });
    const isChecked = derived(checked, ($checked) => $checked === true);
    const _isIndeterminate = derived(checked, ($checked) => $checked === "indeterminate");
    return {
      elements: {
        checkboxItem
      },
      states: {
        checked
      },
      helpers: {
        isChecked,
        isIndeterminate: _isIndeterminate
      },
      options: {
        disabled
      }
    };
  };
  const createMenuRadioGroup = (args = {}) => {
    const valueWritable = args.value ?? writable(args.defaultValue ?? null);
    const value = overridable(valueWritable, args.onValueChange);
    const radioGroup = makeElement(name("radio-group"), {
      returned: () => ({
        role: "group"
      })
    });
    const radioItemDefaults = {
      disabled: false
    };
    const radioItem = makeElement(name("radio-item"), {
      stores: [value],
      returned: ([$value]) => {
        return (itemProps) => {
          const { value: itemValue, disabled } = { ...radioItemDefaults, ...itemProps };
          const checked = $value === itemValue;
          return {
            disabled,
            role: "menuitemradio",
            "data-state": checked ? "checked" : "unchecked",
            "aria-checked": checked,
            "data-disabled": disabledAttr(disabled),
            "data-value": itemValue,
            "data-orientation": "vertical",
            tabindex: -1
          };
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            e.preventDefault();
            return;
          }
        }), addMeltEventListener(node, "click", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            e.preventDefault();
            return;
          }
          if (e.defaultPrevented) {
            if (!isHTMLElement(itemEl))
              return;
            handleRovingFocus(itemEl);
            return;
          }
          value.set(itemValue);
          if (closeOnItemClick.get()) {
            tick().then(() => {
              rootOpen.set(false);
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          onItemKeyDown(e);
        }), addMeltEventListener(node, "pointermove", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            onItemLeave(e);
            return;
          }
          onMenuItemPointerMove(e, itemEl);
        }), addMeltEventListener(node, "pointerleave", (e) => {
          onMenuItemPointerLeave(e);
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          onItemFocusOut(e);
        }));
        return {
          destroy: unsub
        };
      }
    });
    const isChecked = derived(value, ($value) => {
      return (itemValue) => {
        return $value === itemValue;
      };
    });
    return {
      elements: {
        radioGroup,
        radioItem
      },
      states: {
        value
      },
      helpers: {
        isChecked
      }
    };
  };
  const { elements: { root: separator } } = createSeparator({
    orientation: "horizontal"
  });
  const subMenuDefaults = {
    ...defaults$2,
    disabled: false,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  };
  const createSubmenu = (args) => {
    const withDefaults = { ...subMenuDefaults, ...args };
    const subOpenWritable = withDefaults.open ?? writable(false);
    const subOpen = overridable(subOpenWritable, withDefaults?.onOpenChange);
    const options = toWritableStores(omit(withDefaults, "ids"));
    const { positioning: positioning2, arrowSize: arrowSize2, disabled } = options;
    const subActiveTrigger = withGet(writable(null));
    const subOpenTimer = withGet(writable(null));
    const pointerGraceTimer = withGet(writable(0));
    const subIds = toWritableStores({ ...generateIds(menuIdParts), ...withDefaults.ids });
    safeOnMount(() => {
      const subTrigger2 = document.getElementById(subIds.trigger.get());
      if (subTrigger2) {
        subActiveTrigger.set(subTrigger2);
      }
    });
    const subIsVisible = derivedVisible({
      open: subOpen,
      forceVisible,
      activeTrigger: subActiveTrigger
    });
    const subMenu = makeElement(name("submenu"), {
      stores: [subIsVisible, subIds.menu, subIds.trigger],
      returned: ([$subIsVisible, $subMenuId, $subTriggerId]) => {
        return {
          role: "menu",
          hidden: $subIsVisible ? void 0 : true,
          style: styleToString({
            display: $subIsVisible ? void 0 : "none"
          }),
          id: $subMenuId,
          "aria-labelledby": $subTriggerId,
          "data-state": $subIsVisible ? "open" : "closed",
          // unit tests fail on `.closest` if the id starts with a number
          // so using a data attribute
          "data-id": $subMenuId,
          tabindex: -1
        };
      },
      action: (node) => {
        let unsubPopper = noop;
        const unsubDerived = effect([subIsVisible, positioning2], ([$subIsVisible, $positioning]) => {
          unsubPopper();
          if (!$subIsVisible)
            return;
          const activeTrigger = subActiveTrigger.get();
          if (!activeTrigger)
            return;
          tick().then(() => {
            unsubPopper();
            const parentMenuEl = getParentMenu(activeTrigger);
            unsubPopper = usePopper(node, {
              anchorElement: activeTrigger,
              open: subOpen,
              options: {
                floating: $positioning,
                portal: isHTMLElement(parentMenuEl) ? parentMenuEl : void 0,
                modal: null,
                focusTrap: null,
                escapeKeydown: null
              }
            }).destroy;
          });
        });
        const unsubEvents = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
          if (e.key === kbd.ESCAPE) {
            return;
          }
          const target = e.target;
          const menuEl = e.currentTarget;
          if (!isHTMLElement(target) || !isHTMLElement(menuEl))
            return;
          const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
          if (!isKeyDownInside)
            return;
          if (FIRST_LAST_KEYS.includes(e.key)) {
            e.stopImmediatePropagation();
            handleMenuNavigation(e, loop.get() ?? false);
            return;
          }
          const isCloseKey = SUB_CLOSE_KEYS["ltr"].includes(e.key);
          const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
          const isCharacterKey = e.key.length === 1;
          if (isCloseKey) {
            const $subActiveTrigger = subActiveTrigger.get();
            e.preventDefault();
            subOpen.update(() => {
              if ($subActiveTrigger) {
                handleRovingFocus($subActiveTrigger);
              }
              return false;
            });
            return;
          }
          if (e.key === kbd.TAB) {
            e.preventDefault();
            rootOpen.set(false);
            handleTabNavigation(e, nextFocusable, prevFocusable);
            return;
          }
          if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
            handleTypeaheadSearch(e.key, getMenuItems(menuEl));
          }
        }), addMeltEventListener(node, "pointermove", (e) => {
          onMenuPointerMove(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          const $subActiveTrigger = subActiveTrigger.get();
          if (isUsingKeyboard.get()) {
            const target = e.target;
            const submenuEl = document.getElementById(subIds.menu.get());
            if (!isHTMLElement(submenuEl) || !isHTMLElement(target))
              return;
            if (!submenuEl.contains(target) && target !== $subActiveTrigger) {
              subOpen.set(false);
            }
          } else {
            const menuEl = e.currentTarget;
            const relatedTarget = e.relatedTarget;
            if (!isHTMLElement(relatedTarget) || !isHTMLElement(menuEl))
              return;
            if (!menuEl.contains(relatedTarget) && relatedTarget !== $subActiveTrigger) {
              subOpen.set(false);
            }
          }
        }));
        return {
          destroy() {
            unsubDerived();
            unsubPopper();
            unsubEvents();
          }
        };
      }
    });
    const subTrigger = makeElement(name("subtrigger"), {
      stores: [subOpen, disabled, subIds.menu, subIds.trigger],
      returned: ([$subOpen, $disabled, $subMenuId, $subTriggerId]) => {
        return {
          role: "menuitem",
          id: $subTriggerId,
          tabindex: -1,
          "aria-controls": $subMenuId,
          "aria-expanded": $subOpen,
          "data-state": $subOpen ? "open" : "closed",
          "data-disabled": disabledAttr($disabled),
          "aria-haspopop": "menu"
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        applyAttrsIfDisabled(node);
        subActiveTrigger.update((p) => {
          if (p)
            return p;
          return node;
        });
        const unsubTimer = () => {
          clearTimerStore(subOpenTimer);
          window.clearTimeout(pointerGraceTimer.get());
          pointerGraceIntent.set(null);
        };
        const unsubEvents = executeCallbacks(addMeltEventListener(node, "click", (e) => {
          if (e.defaultPrevented)
            return;
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl))
            return;
          handleRovingFocus(triggerEl);
          if (!subOpen.get()) {
            subOpen.update((prev) => {
              const isAlreadyOpen = prev;
              if (!isAlreadyOpen) {
                subActiveTrigger.set(triggerEl);
                return !prev;
              }
              return prev;
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          const $typed = typed.get();
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl))
            return;
          const isTypingAhead = $typed.length > 0;
          if (isTypingAhead && e.key === kbd.SPACE)
            return;
          if (SUB_OPEN_KEYS["ltr"].includes(e.key)) {
            if (!subOpen.get()) {
              triggerEl.click();
              e.preventDefault();
              return;
            }
            const menuId = triggerEl.getAttribute("aria-controls");
            if (!menuId)
              return;
            const menuEl = document.getElementById(menuId);
            if (!isHTMLElement(menuEl))
              return;
            const firstItem = getMenuItems(menuEl)[0];
            handleRovingFocus(firstItem);
          }
        }), addMeltEventListener(node, "pointermove", (e) => {
          if (!isMouse(e))
            return;
          onItemEnter(e);
          if (e.defaultPrevented)
            return;
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl))
            return;
          if (!isFocusWithinSubmenu(subIds.menu.get())) {
            handleRovingFocus(triggerEl);
          }
          const openTimer = subOpenTimer.get();
          if (!subOpen.get() && !openTimer && !isElementDisabled(triggerEl)) {
            subOpenTimer.set(window.setTimeout(() => {
              subOpen.update(() => {
                subActiveTrigger.set(triggerEl);
                return true;
              });
              clearTimerStore(subOpenTimer);
            }, 100));
          }
        }), addMeltEventListener(node, "pointerleave", (e) => {
          if (!isMouse(e))
            return;
          clearTimerStore(subOpenTimer);
          const submenuEl = document.getElementById(subIds.menu.get());
          const contentRect = submenuEl?.getBoundingClientRect();
          if (contentRect) {
            const side = submenuEl?.dataset.side;
            const rightSide = side === "right";
            const bleed = rightSide ? -5 : 5;
            const contentNearEdge = contentRect[rightSide ? "left" : "right"];
            const contentFarEdge = contentRect[rightSide ? "right" : "left"];
            pointerGraceIntent.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: e.clientX + bleed, y: e.clientY },
                { x: contentNearEdge, y: contentRect.top },
                { x: contentFarEdge, y: contentRect.top },
                { x: contentFarEdge, y: contentRect.bottom },
                { x: contentNearEdge, y: contentRect.bottom }
              ],
              side
            });
            window.clearTimeout(pointerGraceTimer.get());
            pointerGraceTimer.set(window.setTimeout(() => {
              pointerGraceIntent.set(null);
            }, 300));
          } else {
            onTriggerLeave(e);
            if (e.defaultPrevented)
              return;
            pointerGraceIntent.set(null);
          }
        }), addMeltEventListener(node, "focusout", (e) => {
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl))
            return;
          removeHighlight(triggerEl);
          const relatedTarget = e.relatedTarget;
          if (!isHTMLElement(relatedTarget))
            return;
          const menuId = triggerEl.getAttribute("aria-controls");
          if (!menuId)
            return;
          const menu = document.getElementById(menuId);
          if (menu && !menu.contains(relatedTarget)) {
            subOpen.set(false);
          }
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }));
        return {
          destroy() {
            unsubTimer();
            unsubEvents();
          }
        };
      }
    });
    const subArrow = makeElement(name("subarrow"), {
      stores: arrowSize2,
      returned: ($arrowSize) => ({
        "data-arrow": true,
        style: styleToString({
          position: "absolute",
          width: `var(--arrow-size, ${$arrowSize}px)`,
          height: `var(--arrow-size, ${$arrowSize}px)`
        })
      })
    });
    effect([rootOpen], ([$rootOpen]) => {
      if (!$rootOpen) {
        subActiveTrigger.set(null);
        subOpen.set(false);
      }
    });
    effect([pointerGraceIntent], ([$pointerGraceIntent]) => {
      if (!isBrowser || $pointerGraceIntent)
        return;
      window.clearTimeout(pointerGraceTimer.get());
    });
    effect([subOpen], ([$subOpen]) => {
      if (!isBrowser)
        return;
      if ($subOpen && isUsingKeyboard.get()) {
        sleep(1).then(() => {
          const menuEl = document.getElementById(subIds.menu.get());
          if (!menuEl)
            return;
          const menuItems = getMenuItems(menuEl);
          if (!menuItems.length)
            return;
          handleRovingFocus(menuItems[0]);
        });
      }
      if (!$subOpen) {
        const focusedItem = currentFocusedItem.get();
        const subTriggerEl = document.getElementById(subIds.trigger.get());
        if (focusedItem) {
          sleep(1).then(() => {
            const menuEl = document.getElementById(subIds.menu.get());
            if (!menuEl)
              return;
            if (menuEl.contains(focusedItem)) {
              removeHighlight(focusedItem);
            }
          });
        }
        if (!subTriggerEl || document.activeElement === subTriggerEl)
          return;
        removeHighlight(subTriggerEl);
      }
    });
    return {
      ids: subIds,
      elements: {
        subTrigger,
        subMenu,
        subArrow
      },
      states: {
        subOpen
      },
      options
    };
  };
  safeOnMount(() => {
    const triggerEl = document.getElementById(rootIds.trigger.get());
    if (isHTMLElement(triggerEl) && rootOpen.get()) {
      rootActiveTrigger.set(triggerEl);
    }
    const unsubs = [];
    const handlePointer = () => isUsingKeyboard.set(false);
    const handleKeyDown = () => {
      isUsingKeyboard.set(true);
      unsubs.push(executeCallbacks(addEventListener(document, "pointerdown", handlePointer, { capture: true, once: true }), addEventListener(document, "pointermove", handlePointer, { capture: true, once: true })));
    };
    const keydownListener = (e) => {
      if (e.key === kbd.ESCAPE && closeOnEscape.get()) {
        rootOpen.set(false);
        return;
      }
    };
    unsubs.push(addEventListener(document, "keydown", handleKeyDown, { capture: true }));
    unsubs.push(addEventListener(document, "keydown", keydownListener));
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  effect([rootOpen, currentFocusedItem], ([$rootOpen, $currentFocusedItem]) => {
    if (!$rootOpen && $currentFocusedItem) {
      removeHighlight($currentFocusedItem);
    }
  });
  effect([rootOpen], ([$rootOpen]) => {
    if (!isBrowser)
      return;
    if (!$rootOpen) {
      const $rootActiveTrigger = rootActiveTrigger.get();
      if (!$rootActiveTrigger)
        return;
      const $closeFocus = closeFocus.get();
      if (!$rootOpen && $rootActiveTrigger) {
        handleFocus({ prop: $closeFocus, defaultEl: $rootActiveTrigger });
      }
    }
  });
  effect([rootOpen, preventScroll], ([$rootOpen, $preventScroll]) => {
    if (!isBrowser)
      return;
    const unsubs = [];
    if ($rootOpen && $preventScroll) {
      unsubs.push(removeScroll());
    }
    sleep(1).then(() => {
      const menuEl = document.getElementById(rootIds.menu.get());
      if (menuEl && $rootOpen && isUsingKeyboard.get()) {
        if (disableFocusFirstItem.get()) {
          handleRovingFocus(menuEl);
          return;
        }
        const menuItems = getMenuItems(menuEl);
        if (!menuItems.length)
          return;
        handleRovingFocus(menuItems[0]);
      }
    });
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  effect(rootOpen, ($rootOpen) => {
    if (!isBrowser)
      return;
    const handlePointer = () => isUsingKeyboard.set(false);
    const handleKeyDown = (e) => {
      isUsingKeyboard.set(true);
      if (e.key === kbd.ESCAPE && $rootOpen && closeOnEscape.get()) {
        rootOpen.set(false);
        return;
      }
    };
    return executeCallbacks(addEventListener(document, "pointerdown", handlePointer, { capture: true, once: true }), addEventListener(document, "pointermove", handlePointer, { capture: true, once: true }), addEventListener(document, "keydown", handleKeyDown, { capture: true }));
  });
  function handleOpen(triggerEl) {
    rootOpen.update((prev) => {
      const isOpen = !prev;
      if (isOpen) {
        nextFocusable.set(getNextFocusable(triggerEl));
        prevFocusable.set(getPreviousFocusable(triggerEl));
        rootActiveTrigger.set(triggerEl);
      }
      return isOpen;
    });
  }
  function onItemFocusIn(e) {
    const itemEl = e.currentTarget;
    if (!isHTMLElement(itemEl))
      return;
    const $currentFocusedItem = currentFocusedItem.get();
    if ($currentFocusedItem) {
      removeHighlight($currentFocusedItem);
    }
    addHighlight(itemEl);
    currentFocusedItem.set(itemEl);
  }
  function onItemFocusOut(e) {
    const itemEl = e.currentTarget;
    if (!isHTMLElement(itemEl))
      return;
    removeHighlight(itemEl);
  }
  function onItemEnter(e) {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  }
  function onItemLeave(e) {
    if (isPointerMovingToSubmenu(e)) {
      return;
    }
    const target = e.target;
    if (!isHTMLElement(target))
      return;
    const parentMenuEl = getParentMenu(target);
    if (!parentMenuEl)
      return;
    handleRovingFocus(parentMenuEl);
  }
  function onTriggerLeave(e) {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  }
  function onMenuPointerMove(e) {
    if (!isMouse(e))
      return;
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(currentTarget) || !isHTMLElement(target))
      return;
    const $lastPointerX = lastPointerX.get();
    const pointerXHasChanged = $lastPointerX !== e.clientX;
    if (currentTarget.contains(target) && pointerXHasChanged) {
      const newDir = e.clientX > $lastPointerX ? "right" : "left";
      pointerDir.set(newDir);
      lastPointerX.set(e.clientX);
    }
  }
  function onMenuItemPointerMove(e, currTarget = null) {
    if (!isMouse(e))
      return;
    onItemEnter(e);
    if (e.defaultPrevented)
      return;
    if (currTarget) {
      handleRovingFocus(currTarget);
      return;
    }
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(currentTarget))
      return;
    handleRovingFocus(currentTarget);
  }
  function onMenuItemPointerLeave(e) {
    if (!isMouse(e))
      return;
    onItemLeave(e);
  }
  function onItemKeyDown(e) {
    const $typed = typed.get();
    const isTypingAhead = $typed.length > 0;
    if (isTypingAhead && e.key === kbd.SPACE) {
      e.preventDefault();
      return;
    }
    if (SELECTION_KEYS.includes(e.key)) {
      e.preventDefault();
      const itemEl = e.currentTarget;
      if (!isHTMLElement(itemEl))
        return;
      itemEl.click();
    }
  }
  function isIndeterminate(checked) {
    return checked === "indeterminate";
  }
  function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
  }
  function isPointerMovingToSubmenu(e) {
    return pointerMovingToSubmenu.get()(e);
  }
  function getParentMenu(element) {
    const parentMenuEl = element.closest('[role="menu"]');
    if (!isHTMLElement(parentMenuEl))
      return null;
    return parentMenuEl;
  }
  return {
    elements: {
      trigger: rootTrigger,
      menu: rootMenu,
      overlay,
      item,
      group,
      groupLabel,
      arrow: rootArrow,
      separator
    },
    builders: {
      createCheckboxItem,
      createSubmenu,
      createMenuRadioGroup
    },
    states: {
      open: rootOpen
    },
    helpers: {
      handleTypeaheadSearch
    },
    ids: rootIds,
    options: opts.rootOptions
  };
}
function handleTabNavigation(e, nextFocusable, prevFocusable) {
  if (e.shiftKey) {
    const $prevFocusable = prevFocusable.get();
    if ($prevFocusable) {
      e.preventDefault();
      sleep(1).then(() => $prevFocusable.focus());
      prevFocusable.set(null);
    }
  } else {
    const $nextFocusable = nextFocusable.get();
    if ($nextFocusable) {
      e.preventDefault();
      sleep(1).then(() => $nextFocusable.focus());
      nextFocusable.set(null);
    }
  }
}
function getMenuItems(menuElement) {
  return Array.from(menuElement.querySelectorAll(`[data-melt-menu-id="${menuElement.id}"]`)).filter((item) => isHTMLElement(item));
}
function applyAttrsIfDisabled(element) {
  if (!element || !isElementDisabled(element))
    return;
  element.setAttribute("data-disabled", "");
  element.setAttribute("aria-disabled", "true");
}
function clearTimerStore(timerStore) {
  if (!isBrowser)
    return;
  const timer = timerStore.get();
  if (timer) {
    window.clearTimeout(timer);
    timerStore.set(null);
  }
}
function isMouse(e) {
  return e.pointerType === "mouse";
}
function setMeltMenuAttribute(element, selector) {
  if (!element)
    return;
  const menuEl = element.closest(`${selector()}, ${selector("submenu")}`);
  if (!isHTMLElement(menuEl))
    return;
  element.setAttribute("data-melt-menu-id", menuEl.id);
}
function handleMenuNavigation(e, loop) {
  e.preventDefault();
  const currentFocusedItem = document.activeElement;
  const currentTarget = e.currentTarget;
  if (!isHTMLElement(currentFocusedItem) || !isHTMLElement(currentTarget))
    return;
  const menuItems = getMenuItems(currentTarget);
  if (!menuItems.length)
    return;
  const candidateNodes = menuItems.filter((item) => {
    if (item.hasAttribute("data-disabled") || item.getAttribute("disabled") === "true") {
      return false;
    }
    return true;
  });
  const currentIndex = candidateNodes.indexOf(currentFocusedItem);
  let nextIndex;
  switch (e.key) {
    case kbd.ARROW_DOWN:
      if (loop) {
        nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : currentIndex;
      }
      break;
    case kbd.ARROW_UP:
      if (loop) {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : candidateNodes.length - 1;
      } else {
        nextIndex = currentIndex < 0 ? candidateNodes.length - 1 : currentIndex > 0 ? currentIndex - 1 : 0;
      }
      break;
    case kbd.HOME:
      nextIndex = 0;
      break;
    case kbd.END:
      nextIndex = candidateNodes.length - 1;
      break;
    default:
      return;
  }
  handleRovingFocus(candidateNodes[nextIndex]);
}
function isPointerInGraceArea(e, area) {
  if (!area)
    return false;
  const cursorPos = { x: e.clientX, y: e.clientY };
  return isPointInPolygon(cursorPos, area);
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function isFocusWithinSubmenu(submenuId) {
  const activeEl = document.activeElement;
  if (!isHTMLElement(activeEl))
    return false;
  const submenuEl = activeEl.closest(`[data-id="${submenuId}"]`);
  return isHTMLElement(submenuEl);
}
function stateAttr(open) {
  return open ? "open" : "closed";
}
const defaults$1 = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  portal: void 0,
  loop: false,
  dir: "ltr",
  defaultOpen: false,
  forceVisible: false,
  typeahead: true,
  closeFocus: void 0,
  disableFocusFirstItem: false,
  closeOnItemClick: true,
  onOutsideClick: void 0
};
function createDropdownMenu(props) {
  const withDefaults = { ...defaults$1, ...props };
  const rootOptions = toWritableStores(omit(withDefaults, "ids"));
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const rootOpen = overridable(openWritable, withDefaults?.onOpenChange);
  const rootActiveTrigger = withGet(writable(null));
  const nextFocusable = withGet(writable(null));
  const prevFocusable = withGet(writable(null));
  const { elements, builders, ids, states, options } = createMenuBuilder({
    rootOptions,
    rootOpen,
    rootActiveTrigger: withGet(rootActiveTrigger),
    nextFocusable: withGet(nextFocusable),
    prevFocusable: withGet(prevFocusable),
    selector: "dropdown-menu",
    removeScroll: true,
    ids: withDefaults.ids
  });
  return {
    ids,
    elements,
    states,
    builders,
    options
  };
}
const defaults = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = makeElement("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
function generateId() {
  return nanoid(10);
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
const Button$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "type", "builders", "el"]);
  let { href = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { builders = [] } = $$props;
  let { el = void 0 } = $$props;
  const attrs = { "data-button-root": "" };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0)
    $$bindings.builders(builders);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  return `${builders && builders.length ? ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        { tabindex: "0" },
        escape_object(getAttrs(builders)),
        escape_object($$restProps),
        escape_object(attrs)
      ],
      {}
    )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}` : ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        { tabindex: "0" },
        escape_object($$restProps),
        escape_object(attrs)
      ],
      {}
    )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`}`;
});
function getPositioningUpdater(store) {
  return (props = {}) => {
    return updatePositioning$1(store, props);
  };
}
function updatePositioning$1(store, props) {
  const defaultPositioningProps = {
    side: "bottom",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    sameWidth: false,
    avoidCollisions: true,
    collisionPadding: 8,
    fitViewport: false,
    strategy: "absolute",
    overlap: false
  };
  const withDefaults = { ...defaultPositioningProps, ...props };
  store.update((prev) => {
    return {
      ...prev,
      placement: joinPlacement(withDefaults.side, withDefaults.align),
      offset: {
        ...prev.offset,
        mainAxis: withDefaults.sideOffset,
        crossAxis: withDefaults.alignOffset
      },
      gutter: 0,
      sameWidth: withDefaults.sameWidth,
      flip: withDefaults.avoidCollisions,
      overflowPadding: withDefaults.collisionPadding,
      boundary: withDefaults.collisionBoundary,
      fitViewport: withDefaults.fitViewport,
      strategy: withDefaults.strategy,
      overlap: withDefaults.overlap
    };
  });
}
function joinPlacement(side, align) {
  if (align === "center")
    return side;
  return `${side}-${align}`;
}
function getMenuData() {
  const NAME = "menu";
  const SUB_NAME = "menu-submenu";
  const RADIO_GROUP_NAME = "menu-radiogroup";
  const CHECKBOX_ITEM_NAME = "menu-checkboxitem";
  const RADIO_ITEM_NAME = "menu-radioitem";
  const GROUP_NAME = "menu-group";
  const PARTS = [
    "arrow",
    "checkbox-indicator",
    "checkbox-item",
    "content",
    "group",
    "item",
    "label",
    "radio-group",
    "radio-item",
    "radio-indicator",
    "separator",
    "sub-content",
    "sub-trigger",
    "trigger"
  ];
  return {
    NAME,
    SUB_NAME,
    RADIO_GROUP_NAME,
    CHECKBOX_ITEM_NAME,
    RADIO_ITEM_NAME,
    GROUP_NAME,
    PARTS
  };
}
function getCtx() {
  const { NAME } = getMenuData();
  return getContext(NAME);
}
function setCtx(props) {
  const { NAME, PARTS } = getMenuData();
  const getAttrs2 = createBitAttrs("menu", PARTS);
  const dropdownMenu = {
    ...createDropdownMenu({ ...removeUndefined(props), forceVisible: true }),
    getAttrs: getAttrs2
  };
  setContext(NAME, dropdownMenu);
  return {
    ...dropdownMenu,
    updateOption: getOptionUpdater(dropdownMenu.options)
  };
}
function setGroupCtx() {
  const { GROUP_NAME } = getMenuData();
  const { elements: { group }, getAttrs: getAttrs2 } = getCtx();
  const id = generateId();
  setContext(GROUP_NAME, id);
  return { group, id, getAttrs: getAttrs2 };
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "bottom",
    align: "center"
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
const Menu_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let attrs;
  let $$restProps = compute_rest_props($$props, ["href", "asChild", "disabled", "el"]);
  let $item, $$unsubscribe_item;
  let { href = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { disabled = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { item }, getAttrs: getAttrs2 } = getCtx();
  $$unsubscribe_item = subscribe(item, (value) => $item = value);
  createDispatcher();
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $item;
  attrs = {
    ...getAttrs2("item"),
    ...disabledAttrs(disabled)
  };
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_item();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object(builder),
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({ builder }) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}`}`;
});
const Menu_group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $group, $$unsubscribe_group;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { group, id, getAttrs: getAttrs2 } = setGroupCtx();
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  const attrs = getAttrs2("group");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $group(id);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_group();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { dir = void 0 } = $$props;
  let { typeahead = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { disableFocusFirstItem = void 0 } = $$props;
  let { closeOnItemClick = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    closeOnOutsideClick,
    closeOnEscape,
    portal,
    forceVisible: true,
    defaultOpen: open,
    preventScroll,
    loop,
    dir,
    typeahead,
    closeFocus,
    disableFocusFirstItem,
    closeOnItemClick,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.menu, ids.trigger], ([$menuId, $triggerId]) => ({ menu: $menuId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  if ($$props.typeahead === void 0 && $$bindings.typeahead && typeahead !== void 0)
    $$bindings.typeahead(typeahead);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  if ($$props.disableFocusFirstItem === void 0 && $$bindings.disableFocusFirstItem && disableFocusFirstItem !== void 0)
    $$bindings.disableFocusFirstItem(disableFocusFirstItem);
  if ($$props.closeOnItemClick === void 0 && $$bindings.closeOnItemClick && closeOnItemClick !== void 0)
    $$bindings.closeOnItemClick(closeOnItemClick);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("loop", loop);
  }
  {
    updateOption("dir", dir);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("disableFocusFirstItem", disableFocusFirstItem);
  }
  {
    updateOption("typeahead", typeahead);
  }
  {
    updateOption("closeOnItemClick", closeOnItemClick);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Menu_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  let $open, $$unsubscribe_open;
  let $menu, $$unsubscribe_menu;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { side = "bottom" } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 0 } = $$props;
  let { alignOffset = 0 } = $$props;
  let { collisionPadding = 8 } = $$props;
  let { avoidCollisions = true } = $$props;
  let { collisionBoundary = void 0 } = $$props;
  let { sameWidth = false } = $$props;
  let { fitViewport = false } = $$props;
  let { strategy = "absolute" } = $$props;
  let { overlap = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { menu }, states: { open }, ids, getAttrs: getAttrs2 } = getCtx();
  $$unsubscribe_menu = subscribe(menu, (value) => $menu = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  createDispatcher();
  const attrs = getAttrs2("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  if ($$props.alignOffset === void 0 && $$bindings.alignOffset && alignOffset !== void 0)
    $$bindings.alignOffset(alignOffset);
  if ($$props.collisionPadding === void 0 && $$bindings.collisionPadding && collisionPadding !== void 0)
    $$bindings.collisionPadding(collisionPadding);
  if ($$props.avoidCollisions === void 0 && $$bindings.avoidCollisions && avoidCollisions !== void 0)
    $$bindings.avoidCollisions(avoidCollisions);
  if ($$props.collisionBoundary === void 0 && $$bindings.collisionBoundary && collisionBoundary !== void 0)
    $$bindings.collisionBoundary(collisionBoundary);
  if ($$props.sameWidth === void 0 && $$bindings.sameWidth && sameWidth !== void 0)
    $$bindings.sameWidth(sameWidth);
  if ($$props.fitViewport === void 0 && $$bindings.fitViewport && fitViewport !== void 0)
    $$bindings.fitViewport(fitViewport);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.overlap === void 0 && $$bindings.overlap && overlap !== void 0)
    $$bindings.overlap(overlap);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.menu.set(id);
    }
  }
  builder = $menu;
  {
    Object.assign(builder, attrs);
  }
  {
    if ($open) {
      updatePositioning({
        side,
        align,
        sideOffset,
        alignOffset,
        collisionPadding,
        avoidCollisions,
        collisionBoundary,
        sameWidth,
        fitViewport,
        strategy,
        overlap
      });
    }
  }
  $$unsubscribe_open();
  $$unsubscribe_menu();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Menu_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, ids, getAttrs: getAttrs2 } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs2("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size", "builders"]);
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  let { size: size2 = "default" } = $$props;
  let { builders = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0)
    $$bindings.builders(builders);
  return `${validate_component(Button$1, "ButtonPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { builders },
      {
        class: cn(buttonVariants({ variant, size: size2, className }))
      },
      { type: "button" },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const css$1 = {
  code: ".error.svelte-8cyjz5{--tw-border-opacity:1;border-color:rgb(254 202 202 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(254 242 242 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(153 27 27 / var(--tw-text-opacity))\n}.warning.svelte-8cyjz5{--tw-border-opacity:1;border-color:rgb(254 240 138 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(254 252 232 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(133 77 14 / var(--tw-text-opacity))\n}.success.svelte-8cyjz5{--tw-border-opacity:1;border-color:rgb(187 247 208 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(240 253 244 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(22 101 52 / var(--tw-text-opacity))\n}.info.svelte-8cyjz5{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity))\n}",
  map: `{"version":3,"file":"Toast.svelte","sources":["Toast.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\timport { scale, fly } from 'svelte/transition';\\n\\n\\texport let id;\\n\\t/** @type {import(\\"@evidence-dev/component-utilities/stores).ToastStatus } */\\n\\texport let status = 'info';\\n\\texport let title;\\n\\texport let message;\\n\\texport let dismissable = true;\\n\\tconst dispatch = createEventDispatcher();\\n\\n\\tconst dismiss = () => {\\n\\t\\tif (dismissable) dispatch('dismiss', { id });\\n\\t};\\n<\/script>\\n\\n<div\\n\\trole=\\"none\\"\\n\\tclass=\\"print:hidden rounded py-1 px-3 my-4 mx-0 shadow-md text-xs font-mono flex justify-between transition-all duration-300 border {status ??\\n\\t\\t''}\\"\\n\\tin:scale\\n\\tout:fly|local={{ x: 1000, duration: 1000, delay: 0, opacity: 0.8 }}\\n\\ton:click={dismiss}\\n\\ton:keypress={dismiss}\\n>\\n\\t{#if title}\\n\\t\\t<span class=\\"cursor-pointer font-bold pr-8 flex items-center\\">{title}</span>\\n\\t{/if}\\n\\t<span class=\\"cursor-pointer\\">{message}</span>\\n</div>\\n\\n<style>\\n\\t.error {\\n\\n    --tw-border-opacity: 1;\\n\\n    border-color: rgb(254 202 202 / var(--tw-border-opacity));\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(254 242 242 / var(--tw-bg-opacity));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(153 27 27 / var(--tw-text-opacity))\\n}\\n\\n\\t.warning {\\n\\n    --tw-border-opacity: 1;\\n\\n    border-color: rgb(254 240 138 / var(--tw-border-opacity));\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(254 252 232 / var(--tw-bg-opacity));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(133 77 14 / var(--tw-text-opacity))\\n}\\n\\n\\t.success {\\n\\n    --tw-border-opacity: 1;\\n\\n    border-color: rgb(187 247 208 / var(--tw-border-opacity));\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(240 253 244 / var(--tw-bg-opacity));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(22 101 52 / var(--tw-text-opacity))\\n}\\n\\n\\t.info {\\n\\n    --tw-border-opacity: 1;\\n\\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(31 41 55 / var(--tw-text-opacity))\\n}</style>\\n"],"names":[],"mappings":"AAiCC,oBAAO,CAEJ,mBAAmB,CAAE,CAAC,CAEtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CAEzD,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAEzD,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AAClD,CAEC,sBAAS,CAEN,mBAAmB,CAAE,CAAC,CAEtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CAEzD,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAEzD,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AAClD,CAEC,sBAAS,CAEN,mBAAmB,CAAE,CAAC,CAEtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CAEzD,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAEzD,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AAClD,CAEC,mBAAM,CAEH,mBAAmB,CAAE,CAAC,CAEtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CAEzD,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAEzD,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AACjD"}`
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { status = "info" } = $$props;
  let { title } = $$props;
  let { message } = $$props;
  let { dismissable = true } = $$props;
  createEventDispatcher();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  $$result.css.add(css$1);
  return `<div role="none" class="${"print:hidden rounded py-1 px-3 my-4 mx-0 shadow-md text-xs font-mono flex justify-between transition-all duration-300 border " + escape(status ?? "", true) + " svelte-8cyjz5"}">${title ? `<span class="cursor-pointer font-bold pr-8 flex items-center">${escape(title)}</span>` : ``} <span class="cursor-pointer">${escape(message)}</span> </div>`;
});
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  $$unsubscribe_toasts();
  return `<div class="z-[1] fixed right-0 bottom-0 mx-10 my-6 w-80">${each($toasts, (toast) => {
    return `${validate_component(Toast, "Toast").$$render($$result, Object.assign({}, toast), {}, {})}`;
  })}</div>`;
});
const Github = { "default": { "a": { "role": "img", "viewBox": "0 0 24 24", "fill": "currentColor" }, "title": [{}], "path": [{ "d": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }] } };
const Slack = { "default": { "a": { "role": "img", "viewBox": "0 0 24 24", "fill": "currentColor" }, "title": [{}], "path": [{ "d": "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" }] } };
const defaultLogo = "/_app/immutable/assets/wordmark-gray-800.CnzB_64T.png";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logo } = $$props;
  let { title } = $$props;
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${logo ? `<img${add_attribute("src", logo, 0)} alt="logo" class="h-5 aspect-auto" href="/">` : `${title ? `${escape(title)}` : `<img${add_attribute("src", defaultLogo, 0)} alt="evidence" class="h-5 aspect-auto" href="/">`}`}`;
});
const AlgoliaDocSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { algolia } = $$props;
  if ($$props.algolia === void 0 && $$bindings.algolia && algolia !== void 0)
    $$bindings.algolia(algolia);
  return `<div id="docsearch"></div>`;
});
const Dropdown_menu_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "inset"]);
  let { class: className = void 0 } = $$props;
  let { inset = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0)
    $$bindings.inset(inset);
  return `${validate_component(Menu_item, "DropdownMenuPrimitive.Item").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-50  data-[disabled]:opacity-50", inset && "pl-8", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Dropdown_menu_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "sideOffset", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { sideOffset = 4 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Menu_content, "DropdownMenuPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      { sideOffset },
      {
        class: cn("z-50 min-w-[8rem] rounded-md border bg-popover p-1 shadow-md bg-white-100 focus:outline-none antialiased text-gray-100 print:hidden", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Dropdown_menu_shortcut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<span${spread(
    [
      {
        class: escape_attribute_value(cn("ml-auto text-xs tracking-widest opacity-60", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</span>`;
});
const Root = Menu;
const Trigger = Menu_trigger;
const Group = Menu_group;
const KebabMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showQueries, $$unsubscribe_showQueries;
  $$unsubscribe_showQueries = subscribe(showQueries, (value) => $showQueries = value);
  new Event("export-beforeprint");
  new Event("export-afterprint");
  $$unsubscribe_showQueries();
  return `${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, { asChild: true }, {}, {
        default: ({ builder }) => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              builders: [builder],
              variant: "ghost",
              size: "sm",
              class: "px-1",
              id: "layout-kebab"
            },
            {},
            {
              default: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { src: Dots, class: "h-6 w-6" }, {}, {})}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, { class: " w-44 text-xs" }, {}, {
        default: () => {
          return `${validate_component(Group, "DropdownMenu.Group").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, {}, {}, {
                default: () => {
                  return `Print PDF
				${validate_component(Dropdown_menu_shortcut, "DropdownMenu.Shortcut").$$render($$result, {}, {}, {
                    default: () => {
                      return `⌘P`;
                    }
                  })}`;
                }
              })} ${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape($showQueries ? "Hide " : "Show ")} Queries`;
                }
              })}`;
            }
          })} ${``}`;
        }
      })}`;
    }
  })}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mobileSidebarOpen = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { logo = void 0 } = $$props;
  let { neverShowQueries = void 0 } = $$props;
  let { fullWidth = void 0 } = $$props;
  let { maxWidth = void 0 } = $$props;
  let { hideSidebar = void 0 } = $$props;
  let { sidebarFrontMatter = void 0 } = $$props;
  let { algolia = void 0 } = $$props;
  let { githubRepo = void 0 } = $$props;
  let { xProfile = void 0 } = $$props;
  let { slackCommunity = void 0 } = $$props;
  if ($$props.mobileSidebarOpen === void 0 && $$bindings.mobileSidebarOpen && mobileSidebarOpen !== void 0)
    $$bindings.mobileSidebarOpen(mobileSidebarOpen);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.neverShowQueries === void 0 && $$bindings.neverShowQueries && neverShowQueries !== void 0)
    $$bindings.neverShowQueries(neverShowQueries);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.hideSidebar === void 0 && $$bindings.hideSidebar && hideSidebar !== void 0)
    $$bindings.hideSidebar(hideSidebar);
  if ($$props.sidebarFrontMatter === void 0 && $$bindings.sidebarFrontMatter && sidebarFrontMatter !== void 0)
    $$bindings.sidebarFrontMatter(sidebarFrontMatter);
  if ($$props.algolia === void 0 && $$bindings.algolia && algolia !== void 0)
    $$bindings.algolia(algolia);
  if ($$props.githubRepo === void 0 && $$bindings.githubRepo && githubRepo !== void 0)
    $$bindings.githubRepo(githubRepo);
  if ($$props.xProfile === void 0 && $$bindings.xProfile && xProfile !== void 0)
    $$bindings.xProfile(xProfile);
  if ($$props.slackCommunity === void 0 && $$bindings.slackCommunity && slackCommunity !== void 0)
    $$bindings.slackCommunity(slackCommunity);
  return `<header class="${"fixed w-full top-0 z-40 flex h-12 shrink-0 justify-start items-center gap-x-4 border-b border-gray-200 bg-white-100/90 backdrop-blur print:hidden " + escape(sidebarFrontMatter === "hide" ? "md:pl-8" : "", true)}"><div${add_attribute(
    "class",
    (fullWidth ? "max-w-full " : maxWidth ? "" : " max-w-7xl ") + "mx-auto px-6 sm:px-8 md:px-12 flex flex-1 items-center justify-between",
    0
  )} style="${"max-width:" + escape(maxWidth, true) + "px;"}">${hideSidebar || sidebarFrontMatter === "never" ? `<a href="/" class="block text-sm font-bold text-gray-100">${validate_component(Logo, "Logo").$$render($$result, { logo, title }, {}, {})}</a>` : `<div class="flex gap-x-4 items-center"><button type="button" class="${"text-gray-900 hover:bg-gray-50 rounded-lg p-1 transition-all duration-500 " + escape(sidebarFrontMatter === "hide" ? "block" : "md:hidden", true)}">${mobileSidebarOpen ? `<span class="sr-only" data-svelte-h="svelte-13q18xv">Close sidebar</span> ${validate_component(Icon, "Icon").$$render($$result, { class: "w-5 h-5", src: X }, {}, {})}` : `<span class="sr-only" data-svelte-h="svelte-73kebv">Open sidebar</span> ${validate_component(Icon, "Icon").$$render($$result, { class: "w-5 h-5", src: Menu2 }, {}, {})}`}</button> <a href="/" class="text-sm font-bold text-gray-100 hidden md:block">${validate_component(Logo, "Logo").$$render($$result, { logo, title }, {}, {})}</a></div>`} <div class="flex gap-2 text-sm items-center">${algolia ? `${validate_component(AlgoliaDocSearch, "AlgoliaDocSearch").$$render($$result, { algolia }, {}, {})}` : ``} <div class="flex gap-2 items-center">${githubRepo ? `<a${add_attribute("href", githubRepo, 0)} class="hover:bg-gray-50 rounded-lg p-2 transition-all duration-200" target="_blank" rel="noreferrer">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: Github,
      class: "w-4 h-4 text-gray-900 "
    },
    {},
    {}
  )}</a>` : ``} ${xProfile ? `<a${add_attribute("href", xProfile, 0)} class="hover:bg-gray-50 rounded-lg p-2 transition-all duration-200" target="_blank" rel="noreferrer"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-900"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg></a>` : ``} ${slackCommunity ? `<a${add_attribute("href", slackCommunity, 0)} class="hover:bg-gray-50 rounded-lg p-2 transition-all duration-200" target="_blank" rel="noreferrer">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: Slack,
      class: "w-4 h-4 text-gray-900 "
    },
    {},
    {}
  )}</a>` : ``}</div> <div class="relative">${!neverShowQueries ? `${validate_component(KebabMenu, "KebabMenu").$$render($$result, {}, {}, {})}` : ``}</div></div></div></header>`;
});
const QueryStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const LoadingSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div role="status" class="animate-pulse" data-svelte-h="svelte-19bzzkg"><span class="sr-only">Loading...</span> <div class="h-8 bg-gray-50 rounded-full dark:bg-gray-400 w-48 mb-8"></div> <div class="flex gap-3"><div class="h-32 bg-gray-200 rounded-md dark:bg-gray-400 w-[22%] mb-3"></div> <div class="h-32 bg-gray-200 rounded-md dark:bg-gray-400 w-[22%] mb-3"></div> <div class="h-32 bg-gray-200 rounded-md dark:bg-gray-400 w-[22%] mb-3"></div> <div class="h-32 bg-gray-200 rounded-md dark:bg-gray-400 w-[22%] mb-3"></div></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[70%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[65%] mb-3"></div> <div class="h-56 bg-gray-200 rounded-md dark:bg-gray-400 max-w-[100%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[80%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[90%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[70%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[80%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100%] mb-3"></div> <div class="h-56 bg-gray-200 rounded-md dark:bg-gray-400 max-w-[100%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[70%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[75%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[90%] mb-3"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[80%] mb-3"></div> <div class="h-56 bg-gray-200 rounded-md dark:bg-gray-400 max-w-[100%] mb-3"></div></div>`;
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="rounded px-0.5 py-[1px] bg-green-50 border border-green-200 text-green-800 group-hover:text-green-950 text-base sm:text-xs">${slots.default ? slots.default({}) : ``}</span>`;
});
function sortChildrenBySidebarPosition(node) {
  if (node.children) {
    node.children = node.children.sort((a, b) => {
      if (!isNaN(a.frontMatter?.sidebar_position) && !isNaN(b.frontMatter?.sidebar_position)) {
        return a.frontMatter.sidebar_position - b.frontMatter.sidebar_position || a.label.localeCompare(b.label);
      } else if (!isNaN(a.frontMatter?.sidebar_position)) {
        return -1;
      } else if (!isNaN(b.frontMatter?.sidebar_position)) {
        return 1;
      } else {
        return a.label.localeCompare(b.label);
      }
    });
    node.children.forEach(sortChildrenBySidebarPosition);
  }
  return node;
}
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { fileTree = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { logo = void 0 } = $$props;
  let { builtWithEvidence = void 0 } = $$props;
  let { hideHeader = false } = $$props;
  let { sidebarFrontMatter = void 0 } = $$props;
  fileTree = sortChildrenBySidebarPosition(fileTree);
  let firstLevelFiles = fileTree?.children;
  let { mobileSidebarOpen = false } = $$props;
  if ($$props.fileTree === void 0 && $$bindings.fileTree && fileTree !== void 0)
    $$bindings.fileTree(fileTree);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.builtWithEvidence === void 0 && $$bindings.builtWithEvidence && builtWithEvidence !== void 0)
    $$bindings.builtWithEvidence(builtWithEvidence);
  if ($$props.hideHeader === void 0 && $$bindings.hideHeader && hideHeader !== void 0)
    $$bindings.hideHeader(hideHeader);
  if ($$props.sidebarFrontMatter === void 0 && $$bindings.sidebarFrontMatter && sidebarFrontMatter !== void 0)
    $$bindings.sidebarFrontMatter(sidebarFrontMatter);
  if ($$props.mobileSidebarOpen === void 0 && $$bindings.mobileSidebarOpen && mobileSidebarOpen !== void 0)
    $$bindings.mobileSidebarOpen(mobileSidebarOpen);
  $$unsubscribe_page();
  return `${mobileSidebarOpen ? `<div class="fixed inset-0 bg-white-100/80 z-50 backdrop-blur-sm" role="button" tabindex="-1"></div> <div class="bg-white-100 border-r border-gray-300 shadow-lg fixed inset-0 z-50 flex sm:w-72 h-screen w-screen flex-col overflow-hidden select-none"><div class="pb-4 text-gray-700"><div class="py-3 px-8 mb-3 flex items-start justify-between"><a href="/" class="block mt-1 text-sm font-bold text-gray-100">${validate_component(Logo, "Logo").$$render($$result, { logo, title }, {}, {})}</a> <span role="button" tabindex="-1"><button type="button" class="text-gray-900 hover:bg-gray-50 rounded-lg p-1 transition-all duration-500" data-svelte-h="svelte-f2w8lm"><span class="sr-only">Close sidebar</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></span></div> <div class="flex-grow px-8 sm:pb-0 pb-4 h-[calc(100vh-8rem)] overflow-auto text-base sm:text-sm pretty-scrollbar" id="mobileScrollable"><div class="flex flex-col pb-6"><a class="sticky top-0 bg-white-100 shadow shadow-white text-gray-950 font-semibold pb-1 mb-1 group inline-block capitalize transition-colors duration-100" href="/" data-svelte-h="svelte-zadvlr">Home</a> ${each(firstLevelFiles, (file) => {
    return `${file.children.length === 0 && file.href && (file.frontMatter?.sidebar_link !== false || file.frontMatter?.sidebar_link === void 0) ? (() => {
      let active = $page.url.pathname.toUpperCase() === file.href.toUpperCase() + "/";
      return ` <a class="${[
        "group inline-block py-1 capitalize transition-colors duration-100",
        (active ? "text-blue-600" : "") + " " + (active ? "hover:text-gray-950" : "") + " " + (active ? "hover:text-blue-600" : "")
      ].join(" ").trim()}"${add_attribute("href", file.href, 0)}>${escape(file.frontMatter?.title ?? file.label)} ${file.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(file.frontMatter.sidebar_badge)} `;
        }
      })}` : ``} </a>`;
    })() : ``}`;
  })}</div> ${each(firstLevelFiles, (file) => {
    return `${file.children.length > 0 ? `<div class="flex flex-col pb-6">${file.href && (file.frontMatter?.sidebar_link !== false || file.frontMatter?.sidebar_link === void 0) ? `<a class="sticky top-0 bg-white-100 shadow shadow-white text-gray-950 font-semibold pb-1 mb-1 group inline-block capitalize transition-colors duration-100"${add_attribute("href", file.href, 0)}>${escape(file.frontMatter?.title ?? file.label)} ${file.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(file.frontMatter.sidebar_badge)} `;
      }
    })}` : ``} </a>` : `<span class="sticky top-0 bg-white-100 shadow shadow-white text-gray-950 font-semibold pb-1 mb-1 group inline-block capitalize transition-colors duration-100"${add_attribute("href", file.href, 0)}>${escape(file.frontMatter?.title ?? file.label)} ${file.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(file.frontMatter.sidebar_badge)} `;
      }
    })}` : ``} </span>`} ${each(file.children, (file2) => {
      return `${file2.href ? (() => {
        let active = $page.url.pathname.toUpperCase() === file2.href.toUpperCase() + "/";
        return ` <a class="${[
          "group inline-block py-1 capitalize transition-colors duration-100",
          (active ? "text-blue-600" : "") + " " + (!active ? "hover:text-gray-950" : "") + " " + (active ? "hover:text-blue-600" : "")
        ].join(" ").trim()}"${add_attribute("href", file2.href, 0)}>${escape(file2.frontMatter?.title ?? file2.label)} ${file2.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(file2.frontMatter.sidebar_badge)} `;
          }
        })}` : ``} </a>`;
      })() : ``}`;
    })} </div>` : ``}`;
  })}</div></div></div>` : ``}  <aside class="${"w-48 flex-none " + escape(
    sidebarFrontMatter === "hide" ? "hidden" : "hidden md:flex",
    true
  )}">${!mobileSidebarOpen ? `<div class="${[
    "hidden: md:block fixed w-48 top-20 bottom-8 overflow-y-auto flex-1 text-sm text-gray-500 pretty-scrollbar",
    hideHeader ? "top-8" : ""
  ].join(" ").trim()}"><div class="flex flex-col pb-6"><a class="sticky top-0 bg-white-100 shadow shadow-white text-gray-950 font-semibold pb-1 mb-1 group inline-block capitalize hover:underline" href="/" data-svelte-h="svelte-p1gyq8">Home</a> ${each(firstLevelFiles, (file) => {
    return `${file.children.length === 0 && file.href && (file.frontMatter?.sidebar_link !== false || file.frontMatter?.sidebar_link === void 0) ? (() => {
      let active = $page.url.pathname.toUpperCase() === file.href.toUpperCase() + "/";
      return ` <a class="${[
        "group inline-block py-1 capitalize transition-all duration-100",
        (active ? "text-blue-600" : "") + " " + (!active ? "hover:text-gray-950" : "") + " " + (active ? "hover:text-blue-600" : "")
      ].join(" ").trim()}"${add_attribute("href", file.href, 0)}>${escape(file.frontMatter?.title ?? file.label)} ${file.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(file.frontMatter.sidebar_badge)} `;
        }
      })}` : ``} </a>`;
    })() : ``}`;
  })}</div> ${each(firstLevelFiles, (file) => {
    return `${file.children.length > 0 ? `<div class="flex flex-col pb-6">${file.href && (file.frontMatter?.sidebar_link !== false || file.frontMatter?.sidebar_link === void 0) ? `<a class="sticky top-0 bg-white-100 shadow shadow-white text-gray-950 font-semibold pb-1 mb-1 group block capitalize hover:underline"${add_attribute("href", file.href, 0)}>${escape(file.frontMatter?.title ?? file.label)} ${file.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(file.frontMatter.sidebar_badge)} `;
      }
    })}` : ``} </a>` : `<span class="sticky top-0 bg-white-100 shadow shadow-white text-gray-950 font-semibold pb-1 mb-1 group inline-block capitalize"${add_attribute("href", file.href, 0)}>${escape(file.frontMatter?.title ?? file.label)} ${file.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(file.frontMatter.sidebar_badge)} `;
      }
    })}` : ``} </span>`} ${each(file.children, (file2) => {
      return `${file2.href && (file2.frontMatter?.sidebar_link !== false || file2.frontMatter?.sidebar_link === void 0) ? (() => {
        let active = $page.url.pathname.toUpperCase() === file2.href.toUpperCase() + "/";
        return ` <a${add_attribute("href", file2.href, 0)} class="${[
          "group inline-block py-1 capitalize transition-all duration-100",
          (active ? "text-blue-600" : "") + " " + (active ? "hover:text-blue-600" : "") + " " + (!active ? "hover:text-gray-950" : "")
        ].join(" ").trim()}">${escape(file2.frontMatter?.title ?? file2.label)} ${file2.frontMatter?.sidebar_badge ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(file2.frontMatter.sidebar_badge)} `;
          }
        })}` : ``} </a>`;
      })() : ``}`;
    })} </div>` : ``}`;
  })}</div>` : ``} ${builtWithEvidence ? `<div class="fixed bottom-0 text-xs py-2" data-svelte-h="svelte-t1ujau"><a href="https://www.evidence.dev" class="bg-gradient-to-r inline-block text-gray-950 antialiased font-medium">Built with Evidence</a></div>` : ``}</aside>`;
});
const css = {
  code: "a.svelte-onnikr{display:block;padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}a.svelte-onnikr:hover{text-decoration-line:underline\n}a.h2.svelte-onnikr{padding-left:0px;--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))\n}a.h3.svelte-onnikr{padding-left:1rem;--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))\n}a.h1.svelte-onnikr{margin-top:0.75rem;display:block;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));font-weight:600;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:#fff;--tw-shadow:var(--tw-shadow-colored)\n}",
  map: `{"version":3,"file":"ContentsList.svelte","sources":["ContentsList.svelte"],"sourcesContent":["<script>\\n\\timport { onMount, onDestroy } from 'svelte';\\n\\n\\tlet headers = [];\\n\\tlet observer;\\n\\n\\tfunction updateLinks() {\\n\\t\\theaders = Array.from(document.querySelectorAll('h1.markdown, h2.markdown, h3.markdown'));\\n\\t}\\n\\n\\tfunction observeDocumentChanges() {\\n\\t\\tobserver = new MutationObserver(() => {\\n\\t\\t\\tupdateLinks();\\n\\t\\t});\\n\\n\\t\\theaders.forEach((header) => {\\n\\t\\t\\tobserver.observe(header, { subtree: true, characterData: true, childList: true });\\n\\t\\t});\\n\\n\\t\\treturn observer;\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\tupdateLinks();\\n\\t\\tobserver = observeDocumentChanges();\\n\\t});\\n\\n\\tonDestroy(() => {\\n\\t\\tobserver?.disconnect();\\n\\t});\\n<\/script>\\n\\n{#if headers && headers.length > 1}\\n\\t<span class=\\"block text-xs sticky top-0 mb-2 text-gray-950 bg-white-100 shadow-white font-medium\\">\\n\\t\\tOn this page\\n\\t</span>\\n\\t{#each headers as header}\\n\\t\\t<a href=\\"#{header.id}\\" class={header.nodeName.toLowerCase()}>\\n\\t\\t\\t{header.innerText}\\n\\t\\t</a>\\n\\t{/each}\\n{/if}\\n\\n<style>\\n\\ta {\\n\\n    display: block;\\n\\n    padding-top: 0.25rem;\\n\\n    padding-bottom: 0.25rem;\\n\\n    font-size: 0.75rem;\\n\\n    line-height: 1rem;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(75 85 99 / var(--tw-text-opacity));\\n\\n    transition-property: all;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n\\ta:hover {\\n\\n    text-decoration-line: underline\\n}\\n\\n\\ta.h2 {\\n\\n    padding-left: 0px;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(107 114 128 / var(--tw-text-opacity))\\n}\\n\\n\\ta.h3 {\\n\\n    padding-left: 1rem;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(107 114 128 / var(--tw-text-opacity))\\n}\\n\\n\\ta.h1 {\\n\\n    margin-top: 0.75rem;\\n\\n    display: block;\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n\\n    font-weight: 600;\\n\\n    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\\n\\n    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\\n\\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n\\n    --tw-shadow-color: #fff;\\n\\n    --tw-shadow: var(--tw-shadow-colored)\\n}</style>\\n"],"names":[],"mappings":"AA4CC,eAAE,CAEC,OAAO,CAAE,KAAK,CAEd,WAAW,CAAE,OAAO,CAEpB,cAAc,CAAE,OAAO,CAEvB,SAAS,CAAE,OAAO,CAElB,WAAW,CAAE,IAAI,CAEjB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAE7C,mBAAmB,CAAE,GAAG,CAExB,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE,KAAK;AAC9B,CAEC,eAAC,MAAO,CAEL,oBAAoB,CAAE,SAAS;AACnC,CAEC,CAAC,iBAAI,CAEF,YAAY,CAAE,GAAG,CAEjB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AACpD,CAEC,CAAC,iBAAI,CAEF,YAAY,CAAE,IAAI,CAElB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AACpD,CAEC,CAAC,iBAAI,CAEF,UAAU,CAAE,OAAO,CAEnB,OAAO,CAAE,KAAK,CAEd,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAEzD,WAAW,CAAE,GAAG,CAEhB,WAAW,CAAE,6DAA6D,CAE1E,mBAAmB,CAAE,yEAAyE,CAE9F,UAAU,CAAE,IAAI,uBAAuB,CAAC,UAAU,CAAC,CAAC,CAAC,IAAI,gBAAgB,CAAC,UAAU,CAAC,CAAC,CAAC,IAAI,WAAW,CAAC,CAEvG,iBAAiB,CAAE,IAAI,CAEvB,WAAW,CAAE;AACjB"}`
};
const ContentsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headers = [];
  onDestroy(() => {
  });
  $$result.css.add(css);
  return `${headers && headers.length > 1 ? `<span class="block text-xs sticky top-0 mb-2 text-gray-950 bg-white-100 shadow-white font-medium" data-svelte-h="svelte-pfe38l">On this page</span> ${each(headers, (header) => {
    return `<a href="${"#" + escape(header.id, true)}" class="${escape(null_to_empty(header.nodeName.toLowerCase()), true) + " svelte-onnikr"}">${escape(header.innerText)} </a>`;
  })}` : ``}`;
});
const TableOfContents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { hideHeader = false } = $$props;
  if ($$props.hideHeader === void 0 && $$bindings.hideHeader && hideHeader !== void 0)
    $$bindings.hideHeader(hideHeader);
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return `<aside class="hidden lg:block w-48">${!$navigating && $page.data.isUserPage ? `<div class="${[
    "fixed w-48 top-20 bottom-20 pl-4 px-3 overflow-auto pretty-scrollbar",
    hideHeader ? "top-8" : ""
  ].join(" ").trim()}">${validate_component(ContentsList, "ContentsList").$$render($$result, {}, {}, {})}</div>` : ``}</aside>`;
});
const BreadCrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathArray;
  let crumbs;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { fileTree } = $$props;
  const checkUrl = function(href, fileTree2) {
    let found = false;
    function checkChildren(node) {
      if (node.href === href || href.startsWith(node.href) && node.isTemplated) {
        found = true;
      } else if (node.children) {
        node.children.forEach((child) => {
          checkChildren(child);
        });
      }
    }
    checkChildren(fileTree2);
    return found;
  };
  const buildCrumbs = function(pathArray2) {
    let crumbs2 = [{ href: "/", title: "Home" }];
    pathArray2.forEach((path, i) => {
      if (path != "") {
        let crumb = {
          href: "/" + pathArray2.slice(0, i + 1).join("/"),
          title: decodeURIComponent(path.replace(/_/g, " ").replace(/-/g, " "))
        };
        crumbs2.push(crumb);
      }
    });
    if (crumbs2.length > 3) {
      let upOne = crumbs2.slice(-3)[0].href;
      crumbs2.splice(1, crumbs2.length - 3, { href: upOne, title: "..." });
    }
    crumbs2.forEach((path) => {
      if (!checkUrl(path.href, fileTree)) {
        path.href = null;
      }
    });
    return crumbs2;
  };
  if ($$props.fileTree === void 0 && $$bindings.fileTree && fileTree !== void 0)
    $$bindings.fileTree(fileTree);
  pathArray = $page.url.pathname.split("/").slice(1);
  crumbs = buildCrumbs(pathArray);
  $$unsubscribe_page();
  return `<div class="flex items-start mt-0 whitespace-nowrap overflow-auto"><div class="inline-flex items-center text-sm capitalize gap-1 text-gray-500 mb-2 sm:mb-4">${each(crumbs, (crumb, i) => {
    return `${i > 0 ? `${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        src: ChevronRight,
        size: "12px",
        theme: "solid"
      },
      {},
      {}
    )} ${crumb.href ? `<a${add_attribute("href", crumb.href, 0)} class="hover:underline">${escape(crumb.title)}</a>` : `<span class="cursor-default">${escape(crumb.title)}</span>`}` : `<a${add_attribute("href", crumb.href, 0)} class="hover:underline">${escape(crumb.title)} </a>`}`;
  })}</div></div>`;
});
const ErrorOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
function convertFileTreeToFileMap(fileTree) {
  const map = /* @__PURE__ */ new Map();
  function traverse(node) {
    if (!node) {
      return;
    }
    if (node.href) {
      const decodedHref = decodeURI(node.href);
      map.set(decodedHref, node);
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  }
  traverse(fileTree);
  return map;
}
const EvidenceDefaultLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileMap;
  let routeFrontMatter;
  let sidebarFrontMatter;
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  let { title = void 0 } = $$props;
  let { logo = void 0 } = $$props;
  let { neverShowQueries = false } = $$props;
  let { fullWidth = false } = $$props;
  let { hideSidebar = false } = $$props;
  let { builtWithEvidence = false } = $$props;
  let { algolia = void 0 } = $$props;
  let { githubRepo = void 0 } = $$props;
  let { xProfile = void 0 } = $$props;
  let { slackCommunity = void 0 } = $$props;
  let { maxWidth = void 0 } = $$props;
  let { hideBreadcrumbs = false } = $$props;
  let { hideHeader = false } = $$props;
  let { hideTOC = false } = $$props;
  const prefetchStrategy = "hover";
  let mobileSidebarOpen = false;
  let fileTree = data?.pagesManifest;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.neverShowQueries === void 0 && $$bindings.neverShowQueries && neverShowQueries !== void 0)
    $$bindings.neverShowQueries(neverShowQueries);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.hideSidebar === void 0 && $$bindings.hideSidebar && hideSidebar !== void 0)
    $$bindings.hideSidebar(hideSidebar);
  if ($$props.builtWithEvidence === void 0 && $$bindings.builtWithEvidence && builtWithEvidence !== void 0)
    $$bindings.builtWithEvidence(builtWithEvidence);
  if ($$props.algolia === void 0 && $$bindings.algolia && algolia !== void 0)
    $$bindings.algolia(algolia);
  if ($$props.githubRepo === void 0 && $$bindings.githubRepo && githubRepo !== void 0)
    $$bindings.githubRepo(githubRepo);
  if ($$props.xProfile === void 0 && $$bindings.xProfile && xProfile !== void 0)
    $$bindings.xProfile(xProfile);
  if ($$props.slackCommunity === void 0 && $$bindings.slackCommunity && slackCommunity !== void 0)
    $$bindings.slackCommunity(slackCommunity);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.hideBreadcrumbs === void 0 && $$bindings.hideBreadcrumbs && hideBreadcrumbs !== void 0)
    $$bindings.hideBreadcrumbs(hideBreadcrumbs);
  if ($$props.hideHeader === void 0 && $$bindings.hideHeader && hideHeader !== void 0)
    $$bindings.hideHeader(hideHeader);
  if ($$props.hideTOC === void 0 && $$bindings.hideTOC && hideTOC !== void 0)
    $$bindings.hideTOC(hideTOC);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($navigating) {
        mobileSidebarOpen = false;
      }
    }
    fileMap = convertFileTreeToFileMap(fileTree);
    routeFrontMatter = fileMap.get($page.route.id)?.frontMatter;
    sidebarFrontMatter = routeFrontMatter?.sidebar;
    {
      if (!["show", "hide", "never"].includes(sidebarFrontMatter)) {
        sidebarFrontMatter = void 0;
      }
    }
    $$rendered = `${slots.default ? slots.default({}) : ``} ${validate_component(ToastWrapper, "ToastWrapper").$$render($$result, {}, {}, {})} <div${add_attribute("data-sveltekit-preload-data", prefetchStrategy, 0)} class="antialiased text-gray-900">${validate_component(ErrorOverlay, "ErrorOverlay").$$render($$result, {}, {}, {})} ${!hideHeader ? `${validate_component(Header, "Header").$$render(
      $$result,
      {
        title,
        logo,
        neverShowQueries,
        fullWidth,
        maxWidth,
        hideSidebar,
        githubRepo,
        slackCommunity,
        xProfile,
        algolia,
        sidebarFrontMatter,
        mobileSidebarOpen
      },
      {
        mobileSidebarOpen: ($$value) => {
          mobileSidebarOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div${add_attribute(
      "class",
      (fullWidth ? "max-w-full " : maxWidth ? "" : " max-w-7xl ") + "print:w-[650px] print:md:w-[841px] mx-auto print:md:px-0 print:px-0 px-6 sm:px-8 md:px-12 flex justify-start",
      0
    )} style="${"max-width:" + escape(maxWidth, true) + "px;"}">${!hideSidebar && sidebarFrontMatter !== "never" ? `<div class="print:hidden">${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      {
        fileTree,
        title,
        logo,
        builtWithEvidence,
        hideHeader,
        sidebarFrontMatter,
        mobileSidebarOpen
      },
      {
        mobileSidebarOpen: ($$value) => {
          mobileSidebarOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} <main${add_attribute(
      "class",
      (!hideSidebar ? "md:pl-8 " : "") + (!hideTOC ? "md:pr-8 " : "") + (!hideHeader ? !hideBreadcrumbs ? " mt-16 sm:mt-20 " : " mt-16 sm:mt-[74px] " : !hideBreadcrumbs ? " mt-4 sm:mt-8 " : " mt-4 sm:mt-[26px] ") + "flex-grow overflow-x-hidden print:px-0 print:mt-8",
      0
    )}>${!hideBreadcrumbs ? `<div class="print:hidden">${$page.route.id !== "/settings" ? `${validate_component(BreadCrumbs, "BreadCrumbs").$$render($$result, { fileTree }, {}, {})}` : ``}</div>` : ``} ${!$navigating ? `<article id="evidence-main-article" class="select-text markdown pb-10">${slots.content ? slots.content({}) : ``}</article>` : `${validate_component(LoadingSkeleton, "LoadingSkeleton").$$render($$result, {}, {}, {})}`}</main> ${!hideTOC ? `<div class="print:hidden">${validate_component(TableOfContents, "TableOfContents").$$render($$result, { hideHeader }, {}, {})}</div>` : ``}</div></div> ${!$navigating && dev && !$page.url.pathname.startsWith("/settings") ? `${validate_component(QueryStatus, "QueryStatus").$$render($$result, {}, {}, {})}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(EvidenceDefaultLayout, "EvidenceDefaultLayout").$$render($$result, { data }, {}, {
    content: () => {
      return `${slots.default ? slots.default({ slot: "content" }) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
