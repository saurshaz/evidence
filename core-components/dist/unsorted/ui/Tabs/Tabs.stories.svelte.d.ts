export namespace meta {
    export let title: string;
    export { Tabs as component };
}
/** @typedef {typeof __propDef.props}  TabsProps */
/** @typedef {typeof __propDef.events}  TabsEvents */
/** @typedef {typeof __propDef.slots}  TabsSlots */
export default class Tabs extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
import Tabs from './Tabs.svelte';
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
