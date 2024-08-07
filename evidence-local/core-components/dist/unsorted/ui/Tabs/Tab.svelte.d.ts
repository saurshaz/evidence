export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  TabProps */
/** @typedef {typeof __propDef.events}  TabEvents */
/** @typedef {typeof __propDef.slots}  TabSlots */
export default class Tab extends SvelteComponent<{
    label: string;
    id: string;
    selected: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TabProps = typeof __propDef.props;
export type TabEvents = typeof __propDef.events;
export type TabSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        id: string;
        selected: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
