/** @type {import("@storybook/svelte").Meta}*/
export const meta: import("@storybook/svelte").Meta;
/** @typedef {typeof __propDef.props}  DataTableProps */
/** @typedef {typeof __propDef.events}  DataTableEvents */
/** @typedef {typeof __propDef.slots}  DataTableSlots */
export default class DataTable extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DataTableProps = typeof __propDef.props;
export type DataTableEvents = typeof __propDef.events;
export type DataTableSlots = typeof __propDef.slots;
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
