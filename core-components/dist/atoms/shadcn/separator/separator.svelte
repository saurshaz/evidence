<script>
	import { Separator as SeparatorPrimitive } from 'bits-ui';
	import { cn } from '../../../utils';

	/** @type {string | undefined | null} */
	let className = undefined;
	/** @type {'horizontal' | 'vertical' | undefined} */
	export let orientation = 'horizontal';
	/** @type {boolean | undefined} */
	export let decorative = undefined;

	export { className as class };
</script>

<SeparatorPrimitive.Root
	class={cn(
		'shrink-0 bg-gray-200',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
		className
	)}
	{orientation}
	{decorative}
	{...$$restProps}
/>
