<script>
	import { Command as CommandPrimitive } from 'cmdk-sv';
	import { cn } from '../../../utils';

	/** @type {any} */
	export let value = undefined;

	/** @type {string | undefined | null} */
	let className = undefined;

	export { className as class };
</script>

<CommandPrimitive.Root
	class={cn(
		'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-gray-900',
		className
	)}
	bind:value
	{...$$restProps}
>
	<slot />
</CommandPrimitive.Root>
