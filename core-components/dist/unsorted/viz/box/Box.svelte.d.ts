export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  BoxProps */
/** @typedef {typeof __propDef.events}  BoxEvents */
/** @typedef {typeof __propDef.slots}  BoxSlots */
export default class Box extends SvelteComponent<{
    boxPlotData: any;
    color?: any;
    options?: any;
    max?: any;
    min?: any;
    y?: any;
    series?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        boxPlotData: any;
        color?: any;
        options?: any;
        max?: any;
        min?: any;
        y?: any;
        series?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
