import { c as compute_rest_props, s as subscribe, a as set_store_value, g as get_store_value, b as noop$1 } from "./utils.js";
import { o as omit, w as withGet, f as safeOnMount, m as makeElement, i as isBrowser, s as styleToString$1, p as portalAttr, e as effect, b as executeCallbacks$1, c as addMeltEventListener, h as createElHelpers, t as tick, x as isElement, k as kbd, u as useEscapeKeydown, a as isHTMLElement, n as noop, y as createCommand, z as getState, A as createGroup, C as getCtx$1, D as generateId, V as VALUE_ATTR, E as isBrowser$1, G as ITEM_SELECTOR, H as isHTMLInputElement, J as getGroup, K as isUndefined, L as isHTMLElement$1, l as cn, I as Icon, q as flyAndScale, M as badgeVariants } from "./VennDiagram.svelte_svelte_type_style_lang.js";
import { c as create_ssr_component, a as spread, b as escape_object, d as add_attribute, s as setContext, g as getContext, h as escape, i as each, v as validate_component, e as escape_attribute_value } from "./ssr.js";
import { a as buildReactiveInputQuery, I as INPUTS_CONTEXT_KEY } from "./buildQuery.js";
import { p as page } from "./stores2.js";
import "dequal";
import { M as MagnifyingGlass, C as Check, a as CaretSort } from "./index5.js";
import { w as writable, d as derived, a as readonly } from "./index2.js";
import { t as toWritableStores, o as overridable, g as generateIds, c as createBitAttrs, r as removeUndefined, a as getOptionUpdater, b as createDispatcher } from "./updater.js";
import { d as derivedVisible, u as usePopper, g as getPortalDestination, a as usePortal, r as removeScroll, h as handleFocus, c as createSeparator, b as getPositioningUpdater, i as is_void, B as Button } from "./button.js";
import { H as HiddenInPrint } from "./HiddenInPrint.js";
import debounce from "lodash.debounce";
import { resolveMaybePromise } from "@evidence-dev/sdk/usql";
import { Q as QueryLoad, f as formatTitle } from "./colours.js";
import { sharedPromise, batchUp } from "@evidence-dev/sdk/utils";
const defaults = {
  positioning: {
    placement: "bottom"
  },
  arrowSize: 8,
  defaultOpen: false,
  disableFocusTrap: false,
  closeOnEscape: true,
  preventScroll: false,
  onOpenChange: void 0,
  closeOnOutsideClick: true,
  portal: void 0,
  forceVisible: false,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
};
const { name } = createElHelpers("popover");
const popoverIdParts = ["trigger", "content"];
function createPopover(args) {
  const withDefaults = { ...defaults, ...args };
  const options = toWritableStores(omit(withDefaults, "open", "ids"));
  const { positioning, arrowSize, disableFocusTrap, preventScroll, closeOnEscape, closeOnOutsideClick, portal, forceVisible, openFocus, closeFocus, onOutsideClick } = options;
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const activeTrigger = withGet.writable(null);
  const ids = toWritableStores({ ...generateIds(popoverIdParts), ...withDefaults.ids });
  safeOnMount(() => {
    activeTrigger.set(document.getElementById(ids.trigger.get()));
  });
  function handleClose() {
    open.set(false);
    const triggerEl = document.getElementById(ids.trigger.get());
    handleFocus({ prop: closeFocus.get(), defaultEl: triggerEl });
  }
  const isVisible = derivedVisible({ open, activeTrigger, forceVisible });
  const content = makeElement(name("content"), {
    stores: [isVisible, portal, ids.content],
    returned: ([$isVisible, $portal, $contentId]) => {
      return {
        hidden: $isVisible && isBrowser ? void 0 : true,
        tabindex: -1,
        style: styleToString$1({
          display: $isVisible ? void 0 : "none"
        }),
        id: $contentId,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": portalAttr($portal)
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubDerived = effect([
        isVisible,
        activeTrigger,
        positioning,
        disableFocusTrap,
        closeOnEscape,
        closeOnOutsideClick,
        portal
      ], ([$isVisible, $activeTrigger, $positioning, $disableFocusTrap, $closeOnEscape, $closeOnOutsideClick, $portal]) => {
        unsubPopper();
        if (!$isVisible || !$activeTrigger)
          return;
        tick().then(() => {
          unsubPopper();
          unsubPopper = usePopper(node, {
            anchorElement: $activeTrigger,
            open,
            options: {
              floating: $positioning,
              focusTrap: $disableFocusTrap ? null : {
                returnFocusOnDeactivate: false,
                clickOutsideDeactivates: $closeOnOutsideClick,
                allowOutsideClick: true,
                escapeDeactivates: $closeOnEscape
              },
              modal: {
                shouldCloseOnInteractOutside,
                onClose: handleClose,
                open: $isVisible,
                closeOnInteractOutside: $closeOnOutsideClick
              },
              escapeKeydown: $closeOnEscape ? {
                handler: () => {
                  handleClose();
                }
              } : null,
              portal: getPortalDestination(node, $portal)
            }
          }).destroy;
        });
      });
      return {
        destroy() {
          unsubDerived();
          unsubPopper();
        }
      };
    }
  });
  function toggleOpen(triggerEl) {
    open.update((prev) => {
      return !prev;
    });
    if (triggerEl && triggerEl !== activeTrigger.get()) {
      activeTrigger.set(triggerEl);
    }
  }
  function shouldCloseOnInteractOutside(e) {
    onOutsideClick.get()?.(e);
    if (e.defaultPrevented)
      return false;
    const target = e.target;
    const triggerEl = document.getElementById(ids.trigger.get());
    if (triggerEl && isElement(target)) {
      if (target === triggerEl || triggerEl.contains(target))
        return false;
    }
    return true;
  }
  const trigger = makeElement(name("trigger"), {
    stores: [isVisible, ids.content, ids.trigger],
    returned: ([$isVisible, $contentId, $triggerId]) => {
      return {
        role: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": $isVisible ? "true" : "false",
        "data-state": stateAttr($isVisible),
        "aria-controls": $contentId,
        id: $triggerId
      };
    },
    action: (node) => {
      const unsub = executeCallbacks$1(addMeltEventListener(node, "click", () => {
        toggleOpen(node);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        toggleOpen(node);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const overlay = makeElement(name("overlay"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString$1({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": "true",
        "data-state": stateAttr($isVisible)
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      let unsubDerived = noop;
      let unsubPortal = noop;
      if (closeOnEscape.get()) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      unsubDerived = effect([portal], ([$portal]) => {
        unsubPortal();
        if ($portal === null)
          return;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return;
        unsubPortal = usePortal(node, portalDestination).destroy;
      });
      return {
        destroy() {
          unsubEscapeKeydown();
          unsubDerived();
          unsubPortal();
        }
      };
    }
  });
  const arrow = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString$1({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  const close = makeElement(name("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (node) => {
      const unsub = executeCallbacks$1(addMeltEventListener(node, "click", (e) => {
        if (e.defaultPrevented)
          return;
        handleClose();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.defaultPrevented)
          return;
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        toggleOpen();
      }));
      return {
        destroy: unsub
      };
    }
  });
  effect([open, activeTrigger, preventScroll], ([$open, $activeTrigger, $preventScroll]) => {
    if (!isBrowser)
      return;
    const unsubs = [];
    if ($open) {
      if (!$activeTrigger) {
        tick().then(() => {
          const triggerEl2 = document.getElementById(ids.trigger.get());
          if (!isHTMLElement(triggerEl2))
            return;
          activeTrigger.set(triggerEl2);
        });
      }
      if ($preventScroll) {
        unsubs.push(removeScroll());
      }
      const triggerEl = $activeTrigger ?? document.getElementById(ids.trigger.get());
      handleFocus({ prop: openFocus.get(), defaultEl: triggerEl });
    }
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  return {
    ids,
    elements: {
      trigger,
      content,
      arrow,
      close,
      overlay
    },
    states: {
      open
    },
    options
  };
}
function stateAttr(open) {
  return open ? "open" : "closed";
}
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
const Separator$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["orientation", "decorative", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { orientation = "horizontal" } = $$props;
  let { decorative = true } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, updateOption, getAttrs } = setCtx$1({ orientation, decorative });
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  const attrs = getAttrs("root");
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("decorative", decorative);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>`}`;
});
function getPopoverData() {
  const NAME = "popover";
  const PARTS = ["arrow", "close", "content", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getPopoverData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const popover = {
    ...createPopover({
      positioning: {
        placement: "bottom",
        gutter: 0
      },
      ...removeUndefined(props),
      forceVisible: true
    }),
    getAttrs
  };
  setContext(NAME, popover);
  return {
    ...popover,
    updateOption: getOptionUpdater(popover.options)
  };
}
function getCtx() {
  const { NAME } = getPopoverData();
  return getContext(NAME);
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
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { disableFocusTrap = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { updateOption, states: { open: localOpen }, ids } = setCtx({
    disableFocusTrap,
    closeOnEscape,
    closeOnOutsideClick,
    preventScroll,
    portal,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    },
    positioning: { gutter: 0, offset: { mainAxis: 1 } }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
    $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("disableFocusTrap", disableFocusTrap);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Popover_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let $content, $$unsubscribe_content;
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
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("content");
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
      ids.content.set(id);
    }
  }
  builder = $content;
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
  $$unsubscribe_content();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Popover_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attrs;
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let $open, $$unsubscribe_open;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  createDispatcher();
  const bitsAttrs = getAttrs("trigger");
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
  attrs = {
    ...bitsAttrs,
    "aria-controls": $open ? ids.content : void 0
  };
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  $$unsubscribe_open();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const css = {
  code: ".viewport.svelte-851usv{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}.contents.svelte-851usv,.row.svelte-851usv{display:block}.row.svelte-851usv{overflow:hidden}",
  map: `{"version":3,"file":"Virtual.svelte","sources":["Virtual.svelte"],"sourcesContent":["<script>\\n\\timport { onMount, tick } from 'svelte';\\n\\n\\t// props\\n\\texport let items;\\n\\texport let height = '100%';\\n\\texport let itemHeight = undefined;\\n\\n\\t// read-only, but visible to consumers via bind:start\\n\\texport let start = 0;\\n\\texport let end = 0;\\n\\n\\t// local state\\n\\tlet height_map = [];\\n\\tlet rows;\\n\\tlet viewport;\\n\\tlet contents;\\n\\tlet viewport_height = 0;\\n\\tlet visible;\\n\\tlet mounted;\\n\\n\\tlet top = 0;\\n\\tlet bottom = 0;\\n\\tlet average_height;\\n\\n\\t$: visible = items.slice(start, end).map((data, i) => {\\n\\t\\treturn { index: i + start, data };\\n\\t});\\n\\n\\t// whenever \`items\` changes, invalidate the current heightmap\\n\\t$: if (mounted) refresh(items, viewport_height, itemHeight);\\n\\n\\tasync function refresh(items, viewport_height, itemHeight) {\\n\\t\\tconst { scrollTop } = viewport;\\n\\n\\t\\tawait tick(); // wait until the DOM is up to date\\n\\t\\tif (!mounted) return;\\n\\n\\t\\tlet content_height = top - scrollTop;\\n\\t\\tlet i = start;\\n\\n\\t\\twhile (content_height < viewport_height && i < items.length) {\\n\\t\\t\\tlet row = rows[i - start];\\n\\n\\t\\t\\tif (!row) {\\n\\t\\t\\t\\tend = i + 1;\\n\\t\\t\\t\\tawait tick(); // render the newly visible row\\n\\t\\t\\t\\tif (!mounted) return;\\n\\t\\t\\t\\trow = rows[i - start];\\n\\t\\t\\t}\\n\\n\\t\\t\\tconst row_height = (height_map[i] =\\n\\t\\t\\t\\titemHeight || row?.offsetHeight || Number.MAX_SAFE_INTEGER);\\n\\t\\t\\tcontent_height += row_height;\\n\\t\\t\\ti += 1;\\n\\t\\t}\\n\\n\\t\\tend = i;\\n\\n\\t\\tconst remaining = items.length - end;\\n\\t\\taverage_height = (top + content_height) / end;\\n\\n\\t\\tbottom = remaining * average_height;\\n\\t\\theight_map.length = items.length;\\n\\t}\\n\\n\\tasync function handle_scroll() {\\n\\t\\tconst { scrollTop } = viewport;\\n\\n\\t\\tconst old_start = start;\\n\\n\\t\\tfor (let v = 0; v < rows.length; v += 1) {\\n\\t\\t\\theight_map[start + v] = itemHeight || rows[v]?.offsetHeight || Number.MAX_SAFE_INTEGER;\\n\\t\\t}\\n\\n\\t\\tlet i = 0;\\n\\t\\tlet y = 0;\\n\\n\\t\\twhile (i < items.length) {\\n\\t\\t\\tconst row_height = height_map[i] || average_height;\\n\\t\\t\\tif (y + row_height > scrollTop) {\\n\\t\\t\\t\\tstart = i;\\n\\t\\t\\t\\ttop = y;\\n\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\t}\\n\\n\\t\\t\\ty += row_height;\\n\\t\\t\\ti += 1;\\n\\t\\t}\\n\\n\\t\\twhile (i < items.length) {\\n\\t\\t\\ty += height_map[i] || average_height;\\n\\t\\t\\ti += 1;\\n\\n\\t\\t\\tif (y > scrollTop + viewport_height) break;\\n\\t\\t}\\n\\n\\t\\tend = i;\\n\\n\\t\\tconst remaining = items.length - end;\\n\\t\\taverage_height = y / end;\\n\\n\\t\\twhile (i < items.length) height_map[i++] = average_height;\\n\\t\\tbottom = remaining * average_height;\\n\\n\\t\\t// prevent jumping if we scrolled up into unknown territory\\n\\t\\tif (start < old_start) {\\n\\t\\t\\tawait tick();\\n\\n\\t\\t\\tlet expected_height = 0;\\n\\t\\t\\tlet actual_height = 0;\\n\\n\\t\\t\\tfor (let i = start; i < old_start; i += 1) {\\n\\t\\t\\t\\tif (rows[i - start]) {\\n\\t\\t\\t\\t\\texpected_height += height_map[i];\\n\\t\\t\\t\\t\\tactual_height += itemHeight || rows[i - start]?.offsetHeight || Number.MAX_SAFE_INTEGER;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\n\\t\\t\\tconst d = actual_height - expected_height;\\n\\t\\t\\tviewport.scrollTo(0, scrollTop + d);\\n\\t\\t}\\n\\n\\t\\t// TODO if we overestimated the space these\\n\\t\\t// rows would occupy we may need to add some\\n\\t\\t// more. maybe we can just call handle_scroll again?\\n\\t}\\n\\n\\t// trigger initial refresh\\n\\tonMount(() => {\\n\\t\\trows = contents.getElementsByClassName('row');\\n\\t\\tmounted = true;\\n\\t\\treturn () => (mounted = false);\\n\\t});\\n<\/script>\\n\\n<div\\n\\tbind:this={viewport}\\n\\tbind:offsetHeight={viewport_height}\\n\\ton:scroll={handle_scroll}\\n\\tstyle=\\"height: {height};\\"\\n\\tclass=\\"viewport\\"\\n>\\n\\t<div\\n\\t\\tclass=\\"contents\\"\\n\\t\\tbind:this={contents}\\n\\t\\tstyle=\\"padding-top: {top}px; padding-bottom: {bottom}px;\\"\\n\\t>\\n\\t\\t{#each visible as row (row.index)}\\n\\t\\t\\t<div class=\\"row\\">\\n\\t\\t\\t\\t<slot item={row.data}>Missing template</slot>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.viewport {\\n\\t\\tposition: relative;\\n\\t\\toverflow-y: auto;\\n\\t\\t-webkit-overflow-scrolling: touch;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.contents,\\n\\t.row {\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.row {\\n\\t\\toverflow: hidden;\\n\\t}</style>\\n"],"names":[],"mappings":"AA8JC,uBAAU,CACT,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,IAAI,CAChB,0BAA0B,CAAE,KAAK,CACjC,OAAO,CAAE,KACV,CAEA,uBAAS,CACT,kBAAK,CACJ,OAAO,CAAE,KACV,CAEA,kBAAK,CACJ,QAAQ,CAAE,MACX"}`
};
const Virtual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = void 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<div style="${"height: " + escape(height, true) + ";"}" class="viewport svelte-851usv"${add_attribute("this", viewport, 0)}><div class="contents svelte-851usv" style="${"padding-top: " + escape(top, true) + "px; padding-bottom: " + escape(bottom, true) + "px;"}"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<div class="row svelte-851usv">${slots.default ? slots.default({ item: row.data }) : `Missing template`} </div>`;
  })}</div> </div>`;
});
const DropdownContext = Symbol("EVIDENCE_DROPDOWN_CTX");
const DropdownOption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { valueLabel = value } = $$props;
  let { idx = -1 } = $$props;
  let { __auto = false } = $$props;
  getContext(DropdownContext);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueLabel === void 0 && $$bindings.valueLabel && valueLabel !== void 0)
    $$bindings.valueLabel(valueLabel);
  if ($$props.idx === void 0 && $$bindings.idx && idx !== void 0)
    $$bindings.idx(idx);
  if ($$props.__auto === void 0 && $$bindings.__auto && __auto !== void 0)
    $$bindings.__auto(__auto);
  return ``;
});
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
};
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
const Command$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, [
    "label",
    "shouldFilter",
    "filter",
    "value",
    "onValueChange",
    "loop",
    "onKeydown",
    "state",
    "ids",
    "asChild"
  ]);
  let $stateStore, $$unsubscribe_stateStore;
  let { label = void 0 } = $$props;
  let { shouldFilter = true } = $$props;
  let { filter = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { onKeydown = void 0 } = $$props;
  let { state = void 0 } = $$props;
  let { ids = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { commandEl, handleRootKeydown, ids: commandIds, state: stateStore } = createCommand({
    label,
    shouldFilter,
    filter,
    value,
    onValueChange: (next) => {
      if (next !== value) {
        value = next;
        onValueChange?.(next);
      }
    },
    loop,
    state,
    ids
  });
  $$unsubscribe_stateStore = subscribe(stateStore, (value2) => $stateStore = value2);
  function syncValueAndState(value2) {
    if (value2 && value2 !== $stateStore.value) {
      set_store_value(stateStore, $stateStore.value = value2, $stateStore);
    }
  }
  function rootAction(node) {
    commandEl.set(node);
    const unsubEvents = executeCallbacks(addEventListener(node, "keydown", handleKeydown));
    return { destroy: unsubEvents };
  }
  const rootAttrs = {
    role: "application",
    id: commandIds.root,
    "data-cmdk-root": ""
  };
  const labelAttrs = {
    "data-cmdk-label": "",
    for: commandIds.input,
    id: commandIds.label,
    style: styleToString(srOnlyStyles)
  };
  function handleKeydown(e) {
    onKeydown?.(e);
    if (e.defaultPrevented)
      return;
    handleRootKeydown(e);
  }
  const root = { action: rootAction, attrs: rootAttrs };
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.shouldFilter === void 0 && $$bindings.shouldFilter && shouldFilter !== void 0)
    $$bindings.shouldFilter(shouldFilter);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.onKeydown === void 0 && $$bindings.onKeydown && onKeydown !== void 0)
    $$bindings.onKeydown(onKeydown);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.ids === void 0 && $$bindings.ids && ids !== void 0)
    $$bindings.ids(ids);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  {
    syncValueAndState(value);
  }
  slotProps = {
    root,
    label: { attrs: labelAttrs },
    stateStore,
    state: $stateStore
  };
  $$unsubscribe_stateStore();
  return `${asChild ? `${slots.default ? slots.default({ ...slotProps }) : ``}` : `<div${spread([escape_object(rootAttrs), escape_object($$restProps)], {})}> <label${spread([escape_object(labelAttrs)], {})}>${escape(label ?? "")}</label> ${slots.default ? slots.default({ ...slotProps }) : ``}</div>`}`;
});
const CommandEmpty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  compute_rest_props($$props, ["asChild"]);
  let $state, $$unsubscribe_state;
  let { asChild = false } = $$props;
  const state = getState();
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $state.filtered.count === 0;
  $$unsubscribe_state();
  return `${``}`;
});
const CommandGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerAttrs;
  let groupAttrs;
  let container;
  let group;
  let $$restProps = compute_rest_props($$props, ["heading", "value", "alwaysRender", "asChild"]);
  let $render, $$unsubscribe_render;
  let { heading = void 0 } = $$props;
  let { value = "" } = $$props;
  let { alwaysRender = false } = $$props;
  let { asChild = false } = $$props;
  const { id } = createGroup(alwaysRender);
  const context = getCtx$1();
  const state = getState();
  const headingId = generateId();
  const render = derived(state, ($state) => {
    if (alwaysRender)
      return true;
    if (context.filter() === false)
      return true;
    if (!$state.search)
      return true;
    return $state.filtered.groups.has(id);
  });
  $$unsubscribe_render = subscribe(render, (value2) => $render = value2);
  function containerAction(node) {
    if (value) {
      context.value(id, value);
      node.setAttribute(VALUE_ATTR, value);
      return;
    }
    if (heading) {
      value = heading.trim().toLowerCase();
    } else if (node.textContent) {
      value = node.textContent.trim().toLowerCase();
    }
    context.value(id, value);
    node.setAttribute(VALUE_ATTR, value);
  }
  const headingAttrs = {
    "data-cmdk-group-heading": "",
    "aria-hidden": true,
    id: headingId
  };
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.alwaysRender === void 0 && $$bindings.alwaysRender && alwaysRender !== void 0)
    $$bindings.alwaysRender(alwaysRender);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  containerAttrs = {
    "data-cmdk-group": "",
    role: "presentation",
    hidden: $render ? void 0 : true,
    "data-value": value
  };
  groupAttrs = {
    "data-cmdk-group-items": "",
    role: "group",
    "aria-labelledby": heading ? headingId : void 0
  };
  container = {
    action: containerAction,
    attrs: containerAttrs
  };
  group = { attrs: groupAttrs };
  $$unsubscribe_render();
  return `${asChild ? `${slots.default ? slots.default({
    container,
    group,
    heading: { attrs: headingAttrs }
  }) : ``}` : `<div${spread([escape_object(containerAttrs), escape_object($$restProps)], {})}>${heading ? `<div${spread([escape_object(headingAttrs)], {})}>${escape(heading)}</div>` : ``} <div${spread([escape_object(groupAttrs)], {})}>${slots.default ? slots.default({
    container,
    group,
    heading: { attrs: headingAttrs }
  }) : ``}</div></div>`}`;
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const CommandInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["autofocus", "value", "asChild", "el"]);
  let $selectedItemId, $$unsubscribe_selectedItemId;
  let $search, $$unsubscribe_search;
  const { ids, commandEl } = getCtx$1();
  const state = getState();
  const search = derived(state, ($state) => $state.search);
  $$unsubscribe_search = subscribe(search, (value2) => $search = value2);
  const valueStore = derived(state, ($state) => $state.value);
  let { autofocus = void 0 } = $$props;
  let { value = $search } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const selectedItemId = derived([valueStore, commandEl], ([$value, $commandEl]) => {
    if (!isBrowser$1)
      return void 0;
    const item = $commandEl?.querySelector(`${ITEM_SELECTOR}[${VALUE_ATTR}="${$value}"]`);
    return item?.getAttribute("id");
  });
  $$unsubscribe_selectedItemId = subscribe(selectedItemId, (value2) => $selectedItemId = value2);
  function handleValueUpdate(v) {
    state.updateState("search", v);
  }
  function action(node) {
    if (autofocus) {
      sleep(10).then(() => node.focus());
    }
    const unsubEvents = addEventListener(node, "change", (e) => {
      if (!isHTMLInputElement(e.target))
        return;
      state.updateState("search", e.target.value);
    });
    return { destroy: unsubEvents };
  }
  let attrs;
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    handleValueUpdate(value);
  }
  attrs = {
    type: "text",
    "data-cmdk-input": "",
    autocomplete: "off",
    autocorrect: "off",
    spellcheck: false,
    "aria-autocomplete": "list",
    role: "combobox",
    "aria-expanded": true,
    "aria-controls": ids.list,
    "aria-labelledby": ids.label,
    "aria-activedescendant": $selectedItemId ?? void 0,
    id: ids.input
  };
  $$unsubscribe_selectedItemId();
  $$unsubscribe_search();
  return `${asChild ? `${slots.default ? slots.default({ action, attrs }) : ``}` : `<input${spread([escape_object(attrs), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}${add_attribute("value", value, 0)}>`}`;
});
const CommandItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attrs;
  let $$restProps = compute_rest_props($$props, ["disabled", "value", "onSelect", "alwaysRender", "asChild", "id"]);
  let $selected, $$unsubscribe_selected;
  let $render, $$unsubscribe_render;
  let { disabled = false } = $$props;
  let { value = "" } = $$props;
  let { onSelect = void 0 } = $$props;
  let { alwaysRender = false } = $$props;
  let { asChild = false } = $$props;
  let { id = generateId() } = $$props;
  const groupContext = getGroup();
  const context = getCtx$1();
  const state = getState();
  const trueAlwaysRender = alwaysRender ?? groupContext?.alwaysRender;
  const render = derived(state, ($state) => {
    if (trueAlwaysRender || context.filter() === false || !$state.search)
      return true;
    const currentScore = $state.filtered.items.get(id);
    if (isUndefined(currentScore))
      return false;
    return currentScore > 0;
  });
  $$unsubscribe_render = subscribe(render, (value2) => $render = value2);
  let isFirstRender = true;
  const selected = derived(state, ($state) => $state.value === value);
  $$unsubscribe_selected = subscribe(selected, (value2) => $selected = value2);
  function action(node) {
    if (!value && node.textContent) {
      value = node.textContent.trim().toLowerCase();
    }
    context.value(id, value);
    node.setAttribute(VALUE_ATTR, value);
    const unsubEvents = executeCallbacks(
      addEventListener(node, "pointermove", () => {
        if (disabled)
          return;
        select();
      }),
      addEventListener(node, "click", () => {
        if (disabled)
          return;
        handleItemClick();
      })
    );
    return {
      destroy() {
        unsubEvents();
      }
    };
  }
  function handleItemClick() {
    select();
    onSelect?.(value);
  }
  function select() {
    state.updateState("value", value, true);
  }
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0)
    $$bindings.onSelect(onSelect);
  if ($$props.alwaysRender === void 0 && $$bindings.alwaysRender && alwaysRender !== void 0)
    $$bindings.alwaysRender(alwaysRender);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  attrs = {
    "aria-disabled": disabled ? true : void 0,
    "aria-selected": $selected ? true : void 0,
    "data-disabled": disabled ? true : void 0,
    "data-selected": $selected ? true : void 0,
    "data-cmdk-item": "",
    "data-value": value,
    role: "option",
    id
  };
  $$unsubscribe_selected();
  $$unsubscribe_render();
  return `${$render || isFirstRender ? `${asChild ? `${slots.default ? slots.default({ action, attrs }) : ``}` : `<div${spread([escape_object(attrs), escape_object($$restProps)], {})}>${slots.default ? slots.default({ action, attrs }) : ``}</div>`}` : ``}`;
});
const CommandList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["el", "asChild"]);
  let $$unsubscribe_state;
  const { ids } = getCtx$1();
  const state = getState();
  $$unsubscribe_state = subscribe(state, (value) => value);
  let { el = void 0 } = $$props;
  let { asChild = false } = $$props;
  function sizerAction(node) {
    let animationFrame;
    const listEl = node.closest("[data-cmdk-list]");
    if (!isHTMLElement$1(listEl)) {
      return;
    }
    const observer = new ResizeObserver(() => {
      animationFrame = requestAnimationFrame(() => {
        const height = node.offsetHeight;
        listEl.style.setProperty("--cmdk-list-height", height.toFixed(1) + "px");
      });
    });
    observer.observe(node);
    return {
      destroy() {
        cancelAnimationFrame(animationFrame);
        observer.unobserve(node);
      }
    };
  }
  const listAttrs = {
    "data-cmdk-list": "",
    role: "listbox",
    "aria-label": "Suggestions",
    id: ids.list,
    "aria-labelledby": ids.input
  };
  const sizerAttrs = { "data-cmdk-list-sizer": "" };
  const list = { attrs: listAttrs };
  const sizer = { attrs: sizerAttrs, action: sizerAction };
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_state();
  return `${asChild ? `${slots.default ? slots.default({ list, sizer }) : ``}` : `<div${spread([escape_object(listAttrs), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}><div${spread([escape_object(sizerAttrs)], {})}>${slots.default ? slots.default({}) : ``}</div></div>`}`;
});
const Command = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "class"]);
  let { value = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Command$1, "CommandPrimitive.Root").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-gray-900", className)
        },
        $$restProps,
        { value }
      ),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Command_empty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandEmpty, "CommandPrimitive.Empty").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("py-6 text-center text-sm", className)
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
const Command_group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandGroup, "CommandPrimitive.Group").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-foreground overflow-hidden p-1 [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-gray-500", className)
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
const Command_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandItem, "CommandPrimitive.Item").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 aria-selected:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
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
const Command_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex items-center border-b px-3" data-cmdk-input-wrapper="">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        src: MagnifyingGlass,
        class: "mr-2 h-4 w-4 shrink-0 opacity-50"
      },
      {},
      {}
    )} ${validate_component(CommandInput, "CommandPrimitive.Input").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50", className)
        },
        $$restProps,
        { value }
      ),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Command_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandList, "CommandPrimitive.List").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
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
const DropdownOptionDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { valueLabel = value } = $$props;
  let { active = false } = $$props;
  let { handleSelect } = $$props;
  let { multiple } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueLabel === void 0 && $$bindings.valueLabel && valueLabel !== void 0)
    $$bindings.valueLabel(valueLabel);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.handleSelect === void 0 && $$bindings.handleSelect && handleSelect !== void 0)
    $$bindings.handleSelect(handleSelect);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  return `${validate_component(Command_item, "Command.Item").$$render(
    $$result,
    {
      value: String(valueLabel),
      onSelect: () => handleSelect({ value, label: valueLabel })
    },
    {},
    {
      default: () => {
        return `${multiple ? `<div${add_attribute(
          "class",
          cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-gray-900", active ? "bg-gray-900 text-gray-50" : "opacity-50 [&_svg]:invisible"),
          0
        )}>${validate_component(Icon, "Icon").$$render($$result, { src: Check, class: cn("h-4 w-4") }, {}, {})}</div>` : `<div class="mr-2 flex h-4 w-4 items-center justify-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            src: Check,
            class: cn("h-4 w-4", !active ? "text-transparent" : "")
          },
          {},
          {}
        )}</div>`} <span class="line-clamp-4">${escape(valueLabel)}</span>`;
      }
    }
  )}`;
});
const Popover_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig", "align", "sideOffset"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 4 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  return `${validate_component(Popover_content$1, "PopoverPrimitive.Content").$$render(
    $$result,
    Object.assign({}, { transition }, { transitionConfig }, { align }, { sideOffset }, $$restProps, {
      class: cn("z-50 w-72 rounded-md border bg-white p-4 text-gray-900 shadow-md outline-none", className)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Root = Popover;
const Trigger = Popover_trigger;
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "orientation", "decorative"]);
  let { class: className = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { decorative = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  return `${validate_component(Separator$1, "SeparatorPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          "shrink-0 bg-gray-200",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      },
      { orientation },
      { decorative },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "href", "variant"]);
  let { class: className = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { variant = "default" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `${((tag) => {
    return tag ? `<${href ? "a" : "span"}${spread(
      [
        { href: escape_attribute_value(href) },
        {
          class: escape_attribute_value(cn(badgeVariants({ variant, className })))
        },
        escape_object($$restProps)
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "span")}`;
});
const DropdownValueFlag = Object.freeze({
  REMOVE_ON_DESELECT: Symbol("removeOnDeselect"),
  IGNORE_SELECTED: Symbol("ignoreSelected"),
  FORCE_SELECT: Symbol("forceSelect"),
  FORCE_DESELECT: Symbol("forceDeselect")
});
const typedBatchup = batchUp;
const flagBatchup = batchUp;
const optEq = (a, b) => {
  return a.value === b.value && a.label === b.label;
};
const optStr = (a) => a.value + a.label;
const dropdownOptionStore = (multi = false, delay = 100) => {
  const options = writable([]);
  const hygiene = ($options) => {
    const knownValues = /* @__PURE__ */ new Set();
    $options = $options.reduce((a, c) => {
      if (!knownValues.has(optStr(c))) {
        knownValues.add(optStr(c));
        a.push(c);
      }
      return a;
    }, []);
    $options = $options.sort((a, b) => {
      if (a.__auto && !b.__auto)
        return 1;
      if (b.__auto && !a.__auto)
        return -1;
      if (a.removeOnDeselect && a.selected) {
        return -1;
      }
      if (b.removeOnDeselect && b.selected) {
        return 1;
      }
      if (a.idx !== b.idx) {
        return a.idx - b.idx;
      }
      if (a.label !== b.label)
        return a.label.toString().localeCompare(b.label.toString());
      if (typeof a.value === "number" && typeof b.value === "number") {
        return a.value - b.value;
      }
      return a.value.toString().localeCompare(b.value.toString());
    });
    return $options;
  };
  const selectedOptions = derived(options, (x) => x.filter((y) => y.selected));
  const cleanup = [];
  let addOptionSharedPromise = sharedPromise();
  addOptionSharedPromise.resolve();
  let removeOptionSharedPromise = sharedPromise();
  removeOptionSharedPromise.resolve();
  let flagOptionSharedPromise = sharedPromise();
  flagOptionSharedPromise.resolve();
  const addOption = typedBatchup(async (addedOptions) => {
    await flagOptionSharedPromise.promise;
    try {
      addedOptions = addedOptions.map((opt) => ({
        ...opt,
        idx: opt.idx ?? -1,
        removeOnDeselect: opt.removeOnDeselect ?? false
      }));
      if (!addedOptions.length)
        return;
      options.update(($options) => {
        $options.push(...addedOptions);
        return hygiene($options);
      });
    } finally {
      addOptionSharedPromise.resolve();
    }
  }, delay);
  const removeOption = typedBatchup(async (removedOptions) => {
    await flagOptionSharedPromise.promise;
    try {
      if (!removedOptions.length)
        return;
      options.update(($options) => {
        $options = $options.filter((option) => {
          const optionIsTargetted = removedOptions.some(
            (removedOption) => optEq(option, removedOption)
          );
          if (!optionIsTargetted)
            return true;
          if (option.selected && !option.ignoreSelected)
            return true;
          return false;
        });
        return hygiene($options);
      });
    } finally {
      removeOptionSharedPromise.resolve();
    }
  }, delay);
  const flagOption = flagBatchup((flaggedOptions) => {
    try {
      if (!flaggedOptions.length)
        return;
      options.update(($options) => {
        $options = $options.map(($option) => {
          const flagApplications = flaggedOptions.filter(
            ([flagOption2]) => optEq($option, flagOption2)
          );
          for (const application of flagApplications) {
            switch (application[1]) {
              case DropdownValueFlag.REMOVE_ON_DESELECT:
                $option.removeOnDeselect = !$option.removeOnDeselect;
                break;
              case DropdownValueFlag.IGNORE_SELECTED:
                $option.ignoreSelected = !$option.ignoreSelected;
                break;
              case DropdownValueFlag.FORCE_SELECT:
                $option.selected = true;
                break;
              case DropdownValueFlag.FORCE_DESELECT:
                $option.selected = true;
                break;
            }
          }
          return $option;
        });
        return hygiene($options);
      });
    } finally {
      flagOptionSharedPromise.resolve();
    }
  }, delay);
  const select = (opt) => {
    if (!opt)
      return;
    options.update(($options) => {
      const target = $options.find((x) => x.value === opt.value && x.label === opt.label);
      if (multi) {
        if (target)
          target.selected = !target.selected;
      } else {
        $options = $options.map(($opt) => {
          if (optEq($opt, opt))
            $opt.selected = true;
          else
            $opt.selected = false;
          return $opt;
        });
      }
      return hygiene($options);
    });
  };
  const cleanRemoveOnSelects = (selectionToggles, allOptions) => {
    for (const option of allOptions) {
      if (option.selected && option.removeOnDeselect) {
        const matchingToggles = selectionToggles.filter((x) => optEq(x, option));
        if (matchingToggles.length % 2 === 1) {
          removeOption(option);
        }
      }
    }
  };
  return {
    options: readonly(options),
    destroy() {
      cleanup.forEach((c) => c());
    },
    selectedOptions,
    addOption: (...args) => {
      if (addOptionSharedPromise.state !== "loading") {
        addOptionSharedPromise = sharedPromise();
        addOptionSharedPromise.start();
      }
      addOption(...args);
    },
    removeOption: (...args) => {
      if (removeOptionSharedPromise.state !== "loading") {
        removeOptionSharedPromise = sharedPromise();
        removeOptionSharedPromise.start();
      }
      removeOption(...args);
    },
    flagOption: (...args) => {
      if (flagOptionSharedPromise.state !== "loading") {
        flagOptionSharedPromise.start();
      }
      flagOption(...args);
    },
    select: typedBatchup(async (selectOptions) => {
      await Promise.all([
        addOptionSharedPromise.promise,
        removeOptionSharedPromise.promise,
        flagOptionSharedPromise.promise
      ]);
      cleanRemoveOnSelects(selectOptions, get_store_value(options));
      for (const option of selectOptions) {
        select(option);
      }
    }, delay),
    deselectAll: (autoOnly = false) => {
      cleanRemoveOnSelects(get_store_value(selectedOptions), get_store_value(options));
      for (const opt of get_store_value(selectedOptions)) {
        if (autoOnly && !opt.__auto)
          continue;
        select(opt);
      }
    }
  };
};
const DISPLAYED_OPTIONS = 5;
function getIdx(queryOpt) {
  if ("similarity" in queryOpt)
    return queryOpt.similarity * -1;
  return queryOpt.ordinal ?? 0;
}
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentInputHash;
  let hasQuery;
  let query;
  let $options, $$unsubscribe_options;
  let $selectedOptions, $$unsubscribe_selectedOptions;
  let $query, $$unsubscribe_query = noop$1, $$subscribe_query = () => ($$unsubscribe_query(), $$unsubscribe_query = subscribe(query, ($$value) => $query = $$value), query);
  let $results, $$unsubscribe_results;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_inputs;
  let $queryOptions, $$unsubscribe_queryOptions = noop$1, $$subscribe_queryOptions = () => ($$unsubscribe_queryOptions(), $$unsubscribe_queryOptions = subscribe(queryOptions, ($$value) => $queryOptions = $$value), queryOptions);
  $$unsubscribe_page = subscribe(page, (value2) => $page = value2);
  const inputs = getContext(INPUTS_CONTEXT_KEY);
  $$unsubscribe_inputs = subscribe(inputs, (value2) => value2);
  let { title = void 0 } = $$props;
  let { name: name2 } = $$props;
  let { multiple = false } = $$props;
  let { hideDuringPrint = true } = $$props;
  let { disableSelectAll = false } = $$props;
  let { defaultValue = [] } = $$props;
  let { noDefault = false } = $$props;
  let { selectAllByDefault = false } = $$props;
  const state = dropdownOptionStore(multiple);
  const { selectedOptions, options, addOption, removeOption, flagOption, select, deselectAll } = state;
  $$unsubscribe_selectedOptions = subscribe(selectedOptions, (value2) => $selectedOptions = value2);
  $$unsubscribe_options = subscribe(options, (value2) => $options = value2);
  setContext(DropdownContext, {
    registerOption: (targetOption) => {
      addOption(targetOption);
      return () => {
        removeOption(targetOption);
      };
    }
  });
  let hasHadSelection = false;
  let open = false;
  let search = "";
  let { value, data, label, order = void 0, where = void 0 } = $$props;
  const { results, update } = buildReactiveInputQuery({ value, data, label, order, where }, `Dropdown-${name2}`, $page?.data?.data[`Dropdown-${name2}`]);
  $$unsubscribe_results = subscribe(results, (value2) => $results = value2);
  let trackedInputHash;
  let queryOptions;
  const updateQueryOptions = debounce(
    async () => {
      if (search && hasQuery) {
        const searchQ = query.search(search, "label");
        await searchQ.fetch();
        $$subscribe_queryOptions(queryOptions = searchQ);
        if ($selectedOptions.length) {
          $selectedOptions.forEach(($selectedOption) => {
            if (!$selectedOption.removeOnDeselect && $selectedOption.__auto)
              flagOption([$selectedOption, DropdownValueFlag.REMOVE_ON_DESELECT]);
          });
        }
      } else {
        $options.forEach(($option) => {
          if ($option.removeOnDeselect)
            flagOption([$option, DropdownValueFlag.REMOVE_ON_DESELECT]);
        });
        $$subscribe_queryOptions(queryOptions = query);
        hasHadSelection = false;
        optionUpdates = void 0;
      }
    },
    250
  );
  let optionUpdates;
  const evalDefaults = () => {
    resolveMaybePromise(
      () => {
        if ($selectedOptions.length) {
          const presentValues = $selectedOptions.filter((x) => $options.some((o) => o.value === x.value && o.label === x.label));
          if (presentValues.length !== $selectedOptions.length && JSON.stringify(presentValues) !== JSON.stringify($selectedOptions)) {
            deselectAll();
            presentValues.forEach((v) => select(v));
            return;
          }
          if (presentValues.length)
            return;
        }
        if (selectAllByDefault && multiple) {
          selectAllOptions();
          return;
        }
        if (noDefault) {
          deselectAll();
          return;
        } else if (typeof defaultValue !== "undefined" && defaultValue !== null && defaultValue.length) {
          const _def = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
          if (_def.length) {
            $options.filter((x) => _def.some((d) => x.value === d)).forEach((x) => select(x));
            return;
          }
        } else if (!multiple && $options.length) {
          select($options[0]);
        }
        return;
      },
      // Fetch the query, then wait for DOM updates to flush (this ensures that the options store is up to date)
      () => query ? query.fetch().then(() => tick()) : tick(),
      (err) => {
        console.error(`Error while updating Dropdown Query: ${err.message}`);
      }
    );
  };
  function selectAllOptions() {
    $options.forEach((opt) => {
      flagOption([opt, DropdownValueFlag.FORCE_SELECT]);
    });
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.name === void 0 && $$bindings.name && name2 !== void 0)
    $$bindings.name(name2);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.hideDuringPrint === void 0 && $$bindings.hideDuringPrint && hideDuringPrint !== void 0)
    $$bindings.hideDuringPrint(hideDuringPrint);
  if ($$props.disableSelectAll === void 0 && $$bindings.disableSelectAll && disableSelectAll !== void 0)
    $$bindings.disableSelectAll(disableSelectAll);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.noDefault === void 0 && $$bindings.noDefault && noDefault !== void 0)
    $$bindings.noDefault(noDefault);
  if ($$props.selectAllByDefault === void 0 && $$bindings.selectAllByDefault && selectAllByDefault !== void 0)
    $$bindings.selectAllByDefault(selectAllByDefault);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  if ($$props.where === void 0 && $$bindings.where && where !== void 0)
    $$bindings.where(where);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      update({ value, data, label, order, where });
    }
    currentInputHash = typeof data === "string" ? data : data?.hash;
    {
      {
        if (currentInputHash !== trackedInputHash) {
          deselectAll(true);
          trackedInputHash = currentInputHash;
        }
      }
    }
    $$subscribe_query({ hasQuery, query } = $results);
    {
      updateQueryOptions();
    }
    {
      if (!optionUpdates && (hasQuery && $query || !hasQuery)) {
        let firstRun = true;
        optionUpdates = options.subscribe((_opts) => {
          if (firstRun) {
            firstRun = false;
            return;
          }
          if (!hasHadSelection && _opts.length) {
            setTimeout(evalDefaults, 0);
            optionUpdates();
          }
        });
      }
    }
    $$rendered = `${slots.default ? slots.default({}) : ``} ${validate_component(QueryLoad, "QueryLoad").$$render($$result, { data: $queryOptions }, {}, {
      skeleton: () => {
        return `<div slot="skeleton"></div>`;
      },
      default: ({ loaded }) => {
        return `${each(loaded ?? [], (queryOpt) => {
          return `${validate_component(DropdownOption, "DropdownOption").$$render(
            $$result,
            {
              value: queryOpt.value,
              valueLabel: queryOpt.label,
              idx: getIdx(queryOpt),
              __auto: true
            },
            {},
            {}
          )}`;
        })}`;
      }
    })} ${validate_component(HiddenInPrint, "HiddenInPrint").$$render($$result, { enabled: hideDuringPrint }, {}, {
      default: () => {
        return `<div class="mt-2 mb-4 ml-0 mr-2 inline-block">${hasQuery && $query.error ? `<span class="group inline-flex items-center relative cursor-help cursor-helpfont-sans px-1 border border-red-200 py-[1px] bg-red-50 rounded"><span class="inline font-sans font-medium text-xs text-red-600" data-svelte-h="svelte-1927df">error</span> <span class="hidden text-white font-sans group-hover:inline absolute -top-1 left-[105%] text-sm z-10 px-2 py-1 bg-gray-800/80 leading-relaxed min-w-[150px] w-max max-w-[400px] rounded-md">${escape($query.error)}</span></span>` : `${validate_component(Root, "Popover.Root").$$render(
          $$result,
          { open },
          {
            open: ($$value) => {
              open = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(Trigger, "Popover.Trigger").$$render($$result, { asChild: true }, {}, {
                default: ({ builder }) => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      builders: [builder],
                      variant: "outline",
                      role: "combo-box",
                      size: "sm",
                      class: "min-w-5 h-8 border"
                    },
                    {},
                    {
                      default: () => {
                        return `${title && !multiple ? `${escape(title)} ${$selectedOptions.length > 0 ? `${validate_component(Separator, "Separator").$$render(
                          $$result,
                          {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          },
                          {},
                          {}
                        )} ${escape($selectedOptions[0].label)}` : ``}` : `${$selectedOptions.length > 0 && !multiple ? `${escape($selectedOptions[0].label)}` : `${escape(title ?? formatTitle(name2))}`}`} ${validate_component(Icon, "Icon").$$render($$result, { src: CaretSort, class: "ml-2 h-4 w-4" }, {}, {})} ${$selectedOptions.length > 0 && multiple ? `${validate_component(Separator, "Separator").$$render(
                          $$result,
                          {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          },
                          {},
                          {}
                        )} ${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal sm:hidden"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape($selectedOptions.length)}`;
                            }
                          }
                        )} <div class="hidden space-x-1 sm:flex">${$selectedOptions.length > 3 ? `${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape($selectedOptions.length)} Selected`;
                            }
                          }
                        )}` : `${each($selectedOptions, (option) => {
                          return `${validate_component(Badge, "Badge").$$render(
                            $$result,
                            {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            },
                            {},
                            {
                              default: () => {
                                return `${escape(option.label)} `;
                              }
                            }
                          )}`;
                        })}`}</div>` : ``}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(Popover_content, "Popover.Content").$$render(
                $$result,
                {
                  class: "w-[200px] p-0",
                  align: "start",
                  side: "bottom"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Command, "Command.Root").$$render($$result, { shouldFilter: false }, {}, {
                      default: () => {
                        return `${validate_component(Command_input, "Command.Input").$$render(
                          $$result,
                          { placeholder: title, value: search },
                          {
                            value: ($$value) => {
                              search = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )} ${validate_component(Command_list, "Command.List").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Command_empty, "Command.Empty").$$render($$result, {}, {}, {
                              default: () => {
                                return `No results found.`;
                              }
                            })} ${validate_component(Command_group, "Command.Group").$$render($$result, {}, {}, {
                              default: () => {
                                return `${$options.length <= DISPLAYED_OPTIONS ? `${each($options, (option, i) => {
                                  return `${validate_component(DropdownOptionDisplay, "DropdownOptionDisplay").$$render(
                                    $$result,
                                    {
                                      id: i,
                                      value: option.value,
                                      valueLabel: option.label,
                                      handleSelect: ({ value: value2, label: label2 }) => {
                                        select({ value: value2, label: label2 });
                                        if (!multiple)
                                          open = false;
                                      },
                                      multiple,
                                      active: $selectedOptions.some((x) => x.value === option.value && x.label === option.label)
                                    },
                                    {},
                                    {}
                                  )}`;
                                })}` : `${validate_component(Virtual, "VirtualList").$$render(
                                  $$result,
                                  {
                                    height: `${DISPLAYED_OPTIONS * 32}px`,
                                    items: $options
                                  },
                                  {},
                                  {
                                    default: ({ item: option }) => {
                                      return `${validate_component(DropdownOptionDisplay, "DropdownOptionDisplay").$$render(
                                        $$result,
                                        {
                                          value: option?.value,
                                          valueLabel: option?.label,
                                          handleSelect: ({ value: value2, label: label2 }) => {
                                            select({ value: value2, label: label2 });
                                            if (!multiple)
                                              open = false;
                                          },
                                          multiple,
                                          active: $selectedOptions.some((x) => x.value === option.value && x.label === option.label)
                                        },
                                        {},
                                        {}
                                      )}`;
                                    }
                                  }
                                )}`}`;
                              }
                            })} ${multiple ? `${!disableSelectAll ? `<div class="-mx-1 h-px bg-gray-200"></div> ${validate_component(Command_item, "Command.Item").$$render(
                              $$result,
                              {
                                class: "justify-center text-center",
                                onSelect: selectAllOptions
                              },
                              {},
                              {
                                default: () => {
                                  return `Select all`;
                                }
                              }
                            )}` : ``} <div class="-mx-1 h-px bg-gray-200"></div> ${validate_component(Command_item, "Command.Item").$$render(
                              $$result,
                              {
                                disabled: $selectedOptions.length === 0,
                                class: "justify-center text-center",
                                onSelect: () => {
                                  deselectAll();
                                }
                              },
                              {},
                              {
                                default: () => {
                                  return `Clear selection`;
                                }
                              }
                            )}` : ``}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          }
        )}`}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_options();
  $$unsubscribe_selectedOptions();
  $$unsubscribe_query();
  $$unsubscribe_results();
  $$unsubscribe_page();
  $$unsubscribe_inputs();
  $$unsubscribe_queryOptions();
  return $$rendered;
});
export {
  Dropdown as D,
  DropdownOption as a
};
