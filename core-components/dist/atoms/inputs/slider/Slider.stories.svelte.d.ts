/** @type {import("@storybook/svelte").Meta}*/
export const meta: import("@storybook/svelte").Meta;
/** @typedef {typeof __propDef.props}  SliderProps */
/** @typedef {typeof __propDef.events}  SliderEvents */
/** @typedef {typeof __propDef.slots}  SliderSlots */
export default class Slider extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
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
