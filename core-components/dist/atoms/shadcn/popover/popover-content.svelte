<script>
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '../../../utils';

	/** @type {string | undefined | null} */
	let className = undefined;

	/** @type {any} */
	export let transition = flyAndScale;

	/** @type {Object | undefined} */
	export let transitionConfig = undefined;

	/** @type {string} */
	export let align = 'center';

	/** @type {number} */
	export let sideOffset = 4;

	export { className as class };
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	{align}
	{sideOffset}
	{...$$restProps}
	class={cn(
		'z-50 w-72 rounded-md border bg-white p-4 text-gray-900 shadow-md outline-none',
		className
	)}
>
	<slot />
</PopoverPrimitive.Content>
