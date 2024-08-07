/**
 * validateSize
 * @param {number} height
 * @param {number} width
 * @returns {{height: number, width: number}}
 */
export function validateSize(height: number, width: number): {
    height: number;
    width: number;
};
/**
 *
 * @param {import("@evidence-dev/sdk/usql).Query | unknown[]} data
 * @param {string} valueCol
 * @param {string} dateCol
 * @returns {value_format_object: object, date_format_object: object}
 */
export function getColumnFormats(data: any, valueCol: string, dateCol: string, valueFmt: any, dateFmt: any): any;
/**
 *
 * @param {*} sparklineData
 * @param {string} seriesType
 * @param {string} color
 * @returns {import("echarts").EChartsOption}
 */
export function getSparklineConfig(sparklineData: any, type: any, seriesType: string, color: string, yScale: any, value_format_object: any, date_format_object: any, height: any, tooltipBackgroundColor: any): import("echarts").EChartsOption;
