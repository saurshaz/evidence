<script context="module">
	export const evidenceInclude = true;

	/** @typedef {"sm" | "md" | "base" | "lg"} ButtonSize */
	/** @typedef {"info" | "success" | "warn" | "error"} ButtonVariant */
	/** @typedef {"left" | "right"} ButtonIconPosition */
	/** @typedef {boolean} ButtonOutline */

	/** @type {Record<ButtonSize, string>}*/
	const sizes = {
		base: 'px-2 py-1 mx-1 gap-2',
		md: 'px-2 py-1 mx-1 gap-2 text-xs',
		sm: 'px-1 py-0.5 mx-0.5 gap-1 text-xs',
		lg: 'px-4 py-2 mx-2 gap-4'
	};

	/** @type {Record<ButtonSize, string>}*/
	const iconSizes = {
		base: 'w-4',
		md: 'w-4',
		sm: 'w-3',
		lg: 'w-5'
	};
	console.log(' --- test logging---');

</script>

<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	/** @type {import("@steeze-ui/svelte-icon").IconSource | undefined} */
	export let icon = undefined;

	/** @type {ButtonIconPosition} */
	export let iconPosition = 'right';

	/** @type {ButtonSize} */
	export let size = 'base';

	/** @type {ButtonSize} */
	export let iconSize = size;

	/** @type {ButtonVariant} */
	export let variant = 'info';

	/** @type {boolean} */
	export let outline = false;

	/** @type {boolean} */
	export let disabled = false;

	/** @type {string | undefined} */
	export let formaction = undefined;

	/** @type {HTMLButtonAttributes["type"]} */
	let _type = 'button';
	export { _type as type };

	$: if (formaction) _type = 'submit';
</script>

<button
	type={_type}
	{disabled}
	{formaction}
	on:click|stopPropagation
	class:outlined={outline}
	class="flex items-center transition-colors rounded variant-{variant} {sizes[size]}"
>
	{#if iconPosition === 'left' && icon}
		<Icon src={icon} class={iconSizes[iconSize]} />
	{/if}
	<slot />
	{#if iconPosition === 'right' && icon}
		<Icon src={icon} class={iconSizes[iconSize]} />
	{/if}
</button>

<style>
	/* 
		Colors are handled here because of the amount of permutations between outlined, variant, and disabled states

		There is probably room to clean this up; but right now it works
	*/
	button.variant-info {
			--100: #dbeafe;
			--400: #60a5fa;
			--500: #3b82f6;
			--600: #2563eb;
			--700: #1d4ed8;
			--800: #1e40af;
			--900: #1e3a8a;
		}
	button.variant-warn {
			--100: #fef9c3;
			--400: #facc15;
			--500: #eab308;
			--600: #ca8a04;
			--700: #a16207;
			--800: #854d0e;
			--900: #713f12;
		}
	button.variant-success {
			--100: #dcfce7;
			--400: #4ade80;
			--500: #22c55e;
			--600: #16a34a;
			--700: #15803d;
			--800: #166534;
			--900: #14532d;
		}
	button.variant-error {
			--100: #fee2e2;
			--400: #f87171;
			--500: #ef4444;
			--600: #dc2626;
			--700: #b91c1c;
			--800: #991b1b;
			--900: #7f1d1d;
		}
	button:enabled {
			cursor: pointer;
}
	button:disabled {
			cursor: default;
}
	button.outlined {
			border-width: 1px;
			border-color: var(--700);
			color: var(--700);
}
	button.outlined:hover:enabled {
			border-color: var(--800);
			background-color: var(--100);
			color: var(--800);
}
	button.outlined:active:enabled {
			border-color: var(--900);
			color: var(--900);
}
	button.outlined:disabled {
			border-color: var(--400);
			color: var(--400);
}
	button:not(.outlined) {
			border-width: 1px;
			border-color: transparent;
			background-color: var(--600);
			--tw-text-opacity: 1;
			color: rgb(255 255 255 / var(--tw-text-opacity));
}
	button:not(.outlined):hover:enabled {
			background-color: var(--700);
}
	button:not(.outlined):active:enabled {
			background-color: var(--800);
}
	button:not(.outlined):disabled {
			background-color: var(--400);
}</style>
