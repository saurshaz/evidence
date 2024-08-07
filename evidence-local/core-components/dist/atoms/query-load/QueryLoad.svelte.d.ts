/** @typedef {typeof __propDef.props}  QueryLoadProps */
/** @typedef {typeof __propDef.events}  QueryLoadEvents */
/** @typedef {typeof __propDef.slots}  QueryLoadSlots */
export default class QueryLoad extends SvelteComponent<{
    data: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        loaded: any;
    };
    empty: {
        loaded: any;
    };
    skeleton: {
        loaded: any;
    };
    error: {
        loaded: any;
    };
}> {
}
export type QueryLoadProps = typeof __propDef.props;
export type QueryLoadEvents = typeof __propDef.events;
export type QueryLoadSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            loaded: any;
        };
        empty: {
            loaded: any;
        };
        skeleton: {
            loaded: any;
        };
        error: {
            loaded: any;
        };
    };
};
export {};
