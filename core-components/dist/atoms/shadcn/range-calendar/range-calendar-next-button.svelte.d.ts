/** @typedef {typeof __propDef.props}  RangeCalendarNextButtonProps */
/** @typedef {typeof __propDef.events}  RangeCalendarNextButtonEvents */
/** @typedef {typeof __propDef.slots}  RangeCalendarNextButtonSlots */
export default class RangeCalendarNextButton extends SvelteComponent<{
    [x: string]: any;
    class?: string;
}, {
    click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLButtonElement>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        builder: {
            role: string;
            type: "button";
            'aria-label': string;
            'aria-disabled': "true";
            disabled: boolean;
            'data-disabled': string;
        } & {
            [x: `data-melt-${string}`]: "";
        } & {
            action: (node: HTMLElement) => import(".pnpm/@melt-ui+svelte@0.76.2_svelte@4.2.12/node_modules/@melt-ui/svelte/internal/types").MeltActionReturn<"click">;
        };
    };
}> {
}
export type RangeCalendarNextButtonProps = typeof __propDef.props;
export type RangeCalendarNextButtonEvents = typeof __propDef.events;
export type RangeCalendarNextButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined | null;
    };
    events: {
        click: import("bits-ui").CustomEventHandler<MouseEvent, HTMLButtonElement>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            builder: {
                role: string;
                type: "button";
                'aria-label': string;
                'aria-disabled': "true";
                disabled: boolean;
                'data-disabled': string;
            } & {
                [x: `data-melt-${string}`]: "";
            } & {
                action: (node: HTMLElement) => import(".pnpm/@melt-ui+svelte@0.76.2_svelte@4.2.12/node_modules/@melt-ui/svelte/internal/types").MeltActionReturn<"click">;
            };
        };
    };
};
export {};
