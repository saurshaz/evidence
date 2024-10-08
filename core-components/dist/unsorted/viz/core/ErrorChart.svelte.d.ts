export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  ErrorChartProps */
/** @typedef {typeof __propDef.events}  ErrorChartEvents */
/** @typedef {typeof __propDef.slots}  ErrorChartSlots */
export default class ErrorChart extends SvelteComponent<{
    error: any;
    chartType: any;
    minHeight?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ErrorChartProps = typeof __propDef.props;
export type ErrorChartEvents = typeof __propDef.events;
export type ErrorChartSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        error: any;
        chartType: any;
        minHeight?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
