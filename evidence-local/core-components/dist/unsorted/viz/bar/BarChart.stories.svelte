<script context="module">
	/** @type {import("@storybook/svelte").Meta}*/
	export const meta = {
		title: 'Charts/BarCharts',
		argTypes: {
			xHasGaps: {
				type: 'boolean',
				description: 'Determines if every series has every x value',
				defaultValue: false
			},
			yHasNulls: {
				type: 'boolean',
				description: 'Determines if y can have nulls',
				defaultValue: false
			},
			seriesAlwaysExists: {
				type: 'boolean',
				description: 'Determines if the series prop can be null',
				defaultValue: true
			},
			type: {
				type: 'string',
				options: ['stacked', 'grouped', 'stacked100'],
				control: { type: 'select' }
			}
		},
		args: {
			xHasGaps: false,
			yHasNulls: false,
			seriesAlwaysExists: true
		}
	};
</script>

<script>
	import { Template, Story } from '@storybook/addon-svelte-csf';

	import BarChart from './BarChart.svelte';

	import { fakerSeries } from '../../../faker-data-queries';
</script>

<Template let:args>
	<BarChart
		{...args}
		x="x"
		y="y"
		series="series"
		data={fakerSeries['numeric_series'][args.xHasGaps][args.yHasNulls][args.seriesAlwaysExists]
			.store}
	/>
</Template>

<Story name="Base" />
<!-- 
<Story name="Query" args={{type: "stacked", data: new QueryStore("SELECT * FROM numeric", query), x: "x", y: "y", series: "series"}} />
<Story name="Query (X Gaps)" args={{type: "stacked", data: new QueryStore("SELECT * FROM numeric_gaps", query), x: "x", y: "y", series: "series"}} />
<Story name="Query (Missing Series)" args={{type: "stacked", data: new QueryStore("SELECT * FROM numeric_series", query), x: "x", y: "y", series: "series"}} />

<Story
	name="Crowded (Explicit X Type)"
	args={{
		xType: 'category',
		data: genSeries({
			...defaultGenSeriesOpts,
			minSeriesLen: 15,
			maxSeriesLen: 15,
			minSeriesCount: 4
		}).data
	}}
/>

<Story
	name="Crowded (Explicit X Type) (Horizontal)"
	args={{
		xType: 'category',
		swapXY: true,
		data: genSeries({
			...defaultGenSeriesOpts,
			minSeriesLen: 15,
			maxSeriesLen: 15,
			minSeriesCount: 4
		}).data
	}}
/>

	This story doesn't work because our series mocking currently doesn't include evidenceColumnTypes
	<Story
	name="Crowded (Implicit X Type)"
	args={{
		data: genSeries({
			...defaultGenSeriesOpts,
			minSeriesLen: 15,
			maxSeriesLen: 15,
			minSeriesCount: 4
		}).data
	}}
/> 

<Story
	name="MultiSeries with Missing Entries"
	args={{
		type: 'stacked',
		data: MissingYCase.data,
		...MissingYCase.keys
	}}
/> -->
