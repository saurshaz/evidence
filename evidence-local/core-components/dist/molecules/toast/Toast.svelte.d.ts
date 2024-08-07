/** @typedef {typeof __propDef.props}  ToastProps */
/** @typedef {typeof __propDef.events}  ToastEvents */
/** @typedef {typeof __propDef.slots}  ToastSlots */
export default class Toast extends SvelteComponent<{
    id: any;
    title: any;
    message: any;
    status?: any;
    dismissable?: boolean;
}, {
    dismiss: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        title: any;
        message: any;
        status?: any;
        dismissable?: boolean;
    };
    events: {
        dismiss: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
