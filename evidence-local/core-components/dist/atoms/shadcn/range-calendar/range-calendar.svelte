<script>
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import * as RangeCalendar from './index.js';
	import * as Select from '../select/index.js';
	import { cn } from '../../../utils.js';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	// required to dodge the styling on the shadcn version
	import { Select as SelectPrimitive } from 'bits-ui';

	/** @typedef {import("@internationalized/date").DateValue} DateValue */
	/** @typedef {import("@internationalized/date").CalendarDate} CalendarDate */

	/** @type {import("bits-ui").DateRange | undefined} */
	let value = undefined;
	/** @type {DateValue | undefined} */
	let placeholder = undefined;
	/** @type {{ start: DateValue; end: DateValue; } | undefined} */
	let selectedDateRange = undefined;
	/** @type {'short' | 'long' | undefined} */
	let weekdayFormat = 'short';
	/** @type {DateValue | undefined} */
	let startValue = undefined;
	/** @type {CalendarDate | undefined} */
	let minValue = undefined;
	/** @type {CalendarDate | undefined} */
	let maxValue = undefined;

	/** @type {string | undefined | null} */
	let className = undefined;

	const monthOptions = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	].map((month, i) => ({ value: i + 1, label: month }));

	const monthFmt = new DateFormatter('en-US', {
		month: 'long'
	});

	$: yearOptions = Array.from({ length: 100 }, (_, i) => ({
		label: String(new Date().getFullYear() - i),
		value: new Date().getFullYear() - i
	})).filter(({ value }) => !(minValue?.year > value || value > maxValue?.year));

	$: defaultYear = placeholder
		? { value: placeholder.year, label: String(placeholder.year) }
		: undefined;

	$: defaultMonth = placeholder
		? { value: placeholder.month, label: monthFmt.format(placeholder.toDate(getLocalTimeZone())) }
		: undefined;

	export {
		className as class,
		value,
		placeholder,
		weekdayFormat,
		startValue,
		selectedDateRange,
		minValue,
		maxValue
	};
</script>

<RangeCalendarPrimitive.Root
	bind:value
	bind:placeholder
	bind:startValue
	bind:selectedDateRange
	{minValue}
	{maxValue}
	{weekdayFormat}
	class={cn('p-3', className)}
	{...$$restProps}
	on:keydown
	let:months
	let:weekdays
>
	<RangeCalendar.Header>
		<RangeCalendar.PrevButton />
		<RangeCalendar.Heading
			class="flex items-center justify-between font-normal text-gray-700 group"
		>
			<Select.Root
				selected={defaultMonth}
				items={monthOptions}
				onSelectedChange={(v) => {
					if (!v || !placeholder) return;
					if (v.value === placeholder?.month) return;
					placeholder = placeholder.set({ month: v.value });
				}}
			>
				<SelectPrimitive.Trigger
					aria-label="Select month"
					class="text-sm pr-1 pl-2 py-1 rounded-tl rounded-bl border-r border-white transition-colors duration-200 group-hover:bg-gray-100 group-hover:border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
				>
					<Select.Value placeholder="Select month" />
				</SelectPrimitive.Trigger>
				<Select.Content class="max-h-[200px] overflow-y-auto !w-[118px]">
					{#each monthOptions as { value, label }}
						<Select.Item {value} {label}>
							{label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			<Select.Root
				selected={defaultYear}
				items={yearOptions}
				onSelectedChange={(v) => {
					if (!v || !placeholder) return;
					if (v.value === placeholder?.year) return;
					placeholder = placeholder.set({ year: v.value });
				}}
			>
				<SelectPrimitive.Trigger
					aria-label="Select year"
					class=" pr-2 pl-1 py-1 rounded-tr rounded-br text-sm group-hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
				>
					<Select.Value placeholder="Select year" />
				</SelectPrimitive.Trigger>
				<Select.Content class="max-h-[200px] overflow-y-auto !w-[79px]">
					{#each yearOptions as { value, label }}
						<Select.Item {value} {label}>
							{label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</RangeCalendar.Heading>
		<RangeCalendar.NextButton />
	</RangeCalendar.Header>
	<RangeCalendar.Months>
		{#each months as month}
			<RangeCalendar.Grid class="mx-auto w-fit">
				<RangeCalendar.GridHead>
					<RangeCalendar.GridRow class="flex">
						{#each weekdays as weekday}
							<RangeCalendar.HeadCell>
								{weekday.slice(0, 2)}
							</RangeCalendar.HeadCell>
						{/each}
					</RangeCalendar.GridRow>
				</RangeCalendar.GridHead>
				<RangeCalendar.GridBody>
					{#each month.weeks as weekDates}
						<RangeCalendar.GridRow class="w-full mt-2">
							{#each weekDates as date}
								<RangeCalendar.Cell {date}>
									<RangeCalendar.Day {date} month={month.value} />
								</RangeCalendar.Cell>
							{/each}
						</RangeCalendar.GridRow>
					{/each}
				</RangeCalendar.GridBody>
			</RangeCalendar.Grid>
		{/each}
	</RangeCalendar.Months>
</RangeCalendarPrimitive.Root>
