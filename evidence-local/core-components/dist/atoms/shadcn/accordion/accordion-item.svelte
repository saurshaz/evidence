<script>
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../../utils';

	/** @type {string | undefined | null} */
	let className = undefined;
	/** @type {any} */
	export let value;

	export { className as class };
</script>

<AccordionPrimitive.Item {value} class={cn('border-b', className)} {...$$restProps}>
	<slot />
</AccordionPrimitive.Item>
