<script>
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../../utils';

	/** @type {string | undefined | null} */
	let className = undefined;

	export { className as class };
</script>

<RangeCalendarPrimitive.HeadCell
	class={cn('w-8 rounded-md text-[0.8rem] font-normal text-gray-500', className)}
	{...$$restProps}
>
	<slot />
</RangeCalendarPrimitive.HeadCell>
