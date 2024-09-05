/** @type {import("@storybook/svelte").Meta}*/
export const meta: import("@storybook/svelte").Meta;
/** @typedef {typeof __propDef.props}  ValueProps */
/** @typedef {typeof __propDef.events}  ValueEvents */
/** @typedef {typeof __propDef.slots}  ValueSlots */
export default class Value extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ValueProps = typeof __propDef.props;
export type ValueEvents = typeof __propDef.events;
export type ValueSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
