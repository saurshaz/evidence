/** @typedef {typeof __propDef.props}  ReactiveQueryProps */
/** @typedef {typeof __propDef.events}  ReactiveQueryEvents */
/** @typedef {typeof __propDef.slots}  ReactiveQuerySlots */
export default class ReactiveQuery extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReactiveQueryProps = typeof __propDef.props;
export type ReactiveQueryEvents = typeof __propDef.events;
export type ReactiveQuerySlots = typeof __propDef.slots;
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
