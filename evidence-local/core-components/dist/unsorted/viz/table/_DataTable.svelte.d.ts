/** @typedef {typeof __propDef.props}  DataTableProps */
/** @typedef {typeof __propDef.events}  DataTableEvents */
/** @typedef {typeof __propDef.slots}  DataTableSlots */
export default class DataTable extends SvelteComponent<{
    [x: string]: any;
    data: any;
    link?: any;
    search?: boolean;
    queryID?: any;
    compact?: any;
    rowShading?: boolean;
    rowNumbers?: boolean;
    rowLines?: boolean;
    groupType?: string;
    groupNamePosition?: string;
    groupBy?: any;
    headerColor?: any;
    headerFontColor?: string;
    sortable?: boolean;
    formatColumnTitles?: boolean;
    wrapTitles?: boolean;
    subtotals?: boolean;
    rows?: number;
    groupsOpen?: boolean;
    accordionRowColor?: any;
    subtotalRowColor?: any;
    subtotalFontColor?: any;
    generateMarkdown?: boolean;
    downloadable?: boolean;
    totalRow?: boolean;
    totalRowColor?: any;
    totalFontColor?: any;
    isFullPage?: boolean;
    showLinkCol?: boolean;
    backgroundColor?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DataTableProps = typeof __propDef.props;
export type DataTableEvents = typeof __propDef.events;
export type DataTableSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";


console.log('datatable');

declare const __propDef: {
    props: {
        [x: string]: any;
        data: any;
        link?: any;
        search?: boolean;
        queryID?: any;
        compact?: any;
        rowShading?: boolean;
        rowNumbers?: boolean;
        rowLines?: boolean;
        groupType?: string;
        groupNamePosition?: string;
        groupBy?: any;
        headerColor?: any;
        headerFontColor?: string;
        sortable?: boolean;
        formatColumnTitles?: boolean;
        wrapTitles?: boolean;
        subtotals?: boolean;
        rows?: number;
        groupsOpen?: boolean;
        accordionRowColor?: any;
        subtotalRowColor?: any;
        subtotalFontColor?: any;
        generateMarkdown?: boolean;
        downloadable?: boolean;
        totalRow?: boolean;
        totalRowColor?: any;
        totalFontColor?: any;
        isFullPage?: boolean;
        showLinkCol?: boolean;
        backgroundColor?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
