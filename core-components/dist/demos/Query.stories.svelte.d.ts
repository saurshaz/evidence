/** @type {import("@storybook/svelte").Meta}*/
export const meta: import("@storybook/svelte").Meta;
/** @typedef {typeof __propDef.props}  QueryProps */
/** @typedef {typeof __propDef.events}  QueryEvents */
/** @typedef {typeof __propDef.slots}  QuerySlots */
export default class Query extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type QueryProps = typeof __propDef.props;
export type QueryEvents = typeof __propDef.events;
export type QuerySlots = typeof __propDef.slots;
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
