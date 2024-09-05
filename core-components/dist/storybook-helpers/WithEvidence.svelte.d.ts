/** @typedef {typeof __propDef.props}  WithEvidenceProps */
/** @typedef {typeof __propDef.events}  WithEvidenceEvents */
/** @typedef {typeof __propDef.slots}  WithEvidenceSlots */
export default class WithEvidence extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type WithEvidenceProps = typeof __propDef.props;
export type WithEvidenceEvents = typeof __propDef.events;
export type WithEvidenceSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
