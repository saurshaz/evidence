/** @typedef {typeof __propDef.props}  SidebarProps */
/** @typedef {typeof __propDef.events}  SidebarEvents */
/** @typedef {typeof __propDef.slots}  SidebarSlots */
export default class Sidebar extends SvelteComponent<{
    title?: any;
    logo?: any;
    mobileSidebarOpen?: boolean;
    sidebarFrontMatter?: any;
    fileTree?: any;
    builtWithEvidence?: any;
    hideHeader?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SidebarProps = typeof __propDef.props;
export type SidebarEvents = typeof __propDef.events;
export type SidebarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: any;
        logo?: any;
        mobileSidebarOpen?: boolean;
        sidebarFrontMatter?: any;
        fileTree?: any;
        builtWithEvidence?: any;
        hideHeader?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
