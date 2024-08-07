export const evidenceInclude: true;
/** @typedef {typeof __propDef.props}  DownloadDataProps */
/** @typedef {typeof __propDef.events}  DownloadDataEvents */
/** @typedef {typeof __propDef.slots}  DownloadDataSlots */
export default class DownloadData extends SvelteComponent<{
    [x: string]: any;
    data?: any;
    text?: string;
    queryID?: any;
    display?: boolean;
    downloadData?: (data: any) => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DownloadDataProps = typeof __propDef.props;
export type DownloadDataEvents = typeof __propDef.events;
export type DownloadDataSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        data?: any;
        text?: string;
        queryID?: any;
        display?: boolean;
        downloadData?: (data: any) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
