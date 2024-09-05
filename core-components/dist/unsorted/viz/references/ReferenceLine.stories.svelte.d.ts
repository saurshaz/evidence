/** @type {import('@storybook/addon-svelte-csf').MetaProps}*/
export const meta: import('@storybook/addon-svelte-csf').MetaProps;
/** @typedef {typeof __propDef.props}  ReferenceLineProps */
/** @typedef {typeof __propDef.events}  ReferenceLineEvents */
/** @typedef {typeof __propDef.slots}  ReferenceLineSlots */
export default class ReferenceLine extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReferenceLineProps = typeof __propDef.props;
export type ReferenceLineEvents = typeof __propDef.events;
export type ReferenceLineSlots = typeof __propDef.slots;
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
