<script>
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../../utils';

	/** @type {string | undefined | null} */
	let className = undefined;

	export { className as class };
</script>

<DropdownMenuPrimitive.Separator
	class={cn('-mx-1 my-1 h-px bg-gray-200', className)}
	{...$$restProps}
/>
