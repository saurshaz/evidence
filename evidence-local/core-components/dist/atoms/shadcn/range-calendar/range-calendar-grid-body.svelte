<script>
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../../utils';

	/** @type {string | undefined | null} */
	let className = undefined;

	export { className as class };
</script>

<RangeCalendarPrimitive.GridBody class={cn(className)} {...$$restProps}>
	<slot />
</RangeCalendarPrimitive.GridBody>
