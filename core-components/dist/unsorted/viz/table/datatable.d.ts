/**
 * Will find the matching column in columnSummary or throw an error if not found
 * @param column
 */
export function safeExtractColumn(column: any, columnSummary: any): any;
/**
 *
 * @param {object[]} data
 * @param {string} valueCol
 * @param {string} weightCol
 * @returns {number | null} Null when weightCol is missing, or data is empty
 */
export function weightedMean(data: object[], valueCol: string, weightCol: string): number | null;
export function median(data: any, column: any): any;
/**
 * Aggregates column values from an array of objects based on the specified aggregation type.
 * This function supports various aggregation types like sum, min, max, mean, count, countDistinct,
 * weightedMean, and median. It defaults to sum for numeric columns if the aggregation type is not specified.
 * For non-numeric columns attempting numeric aggregation, it returns '-'.
 *
 * @param {Object[]} data - Array of objects representing the dataset.
 * @param {string} columnName - The name of the column to aggregate.
 * @param {string} [aggType] - The type of aggregation to perform. Defaults to 'sum' for numeric columns if not specified.
 * @param {string} columnType - The data type of the column ('number' for numeric columns).
 * @param {string} [weightColumnName=null] - The name of the column to use for weighted mean calculations, if applicable.
 * @returns {number|string} The result of the aggregation operation, or '-' for invalid numeric operations on non-numeric columns.
 */
export function aggregateColumn(data: any[], columnName: string, aggType?: string, columnType: string, weightColumnName?: string): number | string;
/**
 * Generates the final column order for a DataTable based on group column(s) and the columns
 * supplied by the user. Group columns are placed first, followed either by the order specified in
 * Column components or the original order of the data
 *
 * @param {Array<string>} columns - An array of column names that represents all columns to be shown in the table
 * @param {Array<string>} priorityColumns - An array of column names that should be shown first (group column(s))
 * @returns {Array<string>} A new array of column names sorted such that priority columns
 *                          come first, followed by the rest of the columns in their original order.
 */
export function getFinalColumnOrder(columns: Array<string>, priorityColumns: Array<string>): Array<string>;
