import "./exports.js";
import "devalue";
import ssf from "ssf";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const AUTO_FORMAT_CODE = "auto";
const AUTO_FORMAT_MEDIAN_PRECISION = 3;
const IMPLICIT_COLUMN_AUTO_FORMATS = [
  {
    name: "year",
    description: 'When lowerCase(columnName)="year" with the column having numeric values will result in no formatting',
    matchingFunction: (columnName, evidenceTypeDescriptor, columnUnitSummary) => {
      if (columnName && evidenceTypeDescriptor) {
        return "year" === columnName.toLowerCase() && (evidenceTypeDescriptor?.evidenceType === "number" || columnUnitSummary?.unitType === "number");
      }
      return false;
    },
    format: {
      formatCode: AUTO_FORMAT_CODE,
      valueType: "number",
      exampleInput: 2013,
      _autoFormat: {
        autoFormatCode: "@",
        truncateUnits: false
      }
    }
  },
  {
    name: "id",
    description: 'When lowerCase(columnName)="id" with the column having numeric values, then values will have no formatting',
    matchingFunction: (columnName, evidenceTypeDescriptor, columnUnitSummary) => {
      if (columnName && evidenceTypeDescriptor) {
        return "id" === columnName.toLowerCase() && (evidenceTypeDescriptor?.evidenceType === "number" || columnUnitSummary?.unitType === "number");
      }
      return false;
    },
    format: {
      formatCode: AUTO_FORMAT_CODE,
      valueType: "number",
      exampleInput: 93120121,
      _autoFormat: {
        autoFormatFunction: (typedValue) => {
          if (typedValue !== null && typedValue !== void 0 && !isNaN(typedValue)) {
            return typedValue.toLocaleString("fullwide", {
              useGrouping: false
            });
          } else {
            return typedValue;
          }
        }
      }
    }
  },
  {
    name: "defaultDate",
    description: "Formatting for Default Date",
    matchingFunction: (columnName, evidenceTypeDescriptor, columnUnitSummary) => {
      if (evidenceTypeDescriptor) {
        return evidenceTypeDescriptor?.evidenceType === "date" || columnUnitSummary?.unitType === "date";
      }
      return false;
    },
    format: {
      formatCode: AUTO_FORMAT_CODE,
      valueType: "date",
      exampleInput: "Sat Jan 01 2022 03:15:00 GMT-0500",
      _autoFormat: {
        autoFormatCode: "YYYY-MM-DD",
        truncateUnits: false
      }
    }
  }
];
const applyColumnUnits = (value, unit) => {
  switch (unit) {
    case "T":
      return value / 1e12;
    case "B":
      return value / 1e9;
    case "M":
      return value / 1e6;
    case "k":
      return value / 1e3;
    default:
      return value;
  }
};
const isAutoFormat = (format, effectiveCode) => {
  let matchesCode = (effectiveCode || format.formatCode)?.toLowerCase() === AUTO_FORMAT_CODE;
  let autoFormatCode = format._autoFormat?.autoFormatFunction || format._autoFormat?.autoFormatCode;
  if (matchesCode && autoFormatCode !== void 0) {
    return true;
  } else {
    return false;
  }
};
const generateImplicitNumberFormat = (columnUnitSummary, maxDisplayDecimals = 7) => {
  let effectiveFormatCode;
  let columnUnits = "";
  let median = columnUnitSummary?.median;
  let truncateUnits;
  if (median !== void 0) {
    let medianInUnitTerms;
    columnUnits = getAutoColumnUnit(median);
    if (columnUnits) {
      medianInUnitTerms = applyColumnUnits(median, columnUnits);
      truncateUnits = true;
    } else {
      medianInUnitTerms = median;
      truncateUnits = false;
    }
    if (columnUnitSummary.maxDecimals === 0 && !truncateUnits) {
      effectiveFormatCode = "#,##0";
    } else {
      effectiveFormatCode = computeNumberAutoFormatCode(medianInUnitTerms, maxDisplayDecimals);
    }
  } else {
    effectiveFormatCode = "#,##0";
    truncateUnits = false;
  }
  return {
    formatCode: AUTO_FORMAT_CODE,
    valueType: "number",
    _autoFormat: {
      autoFormatCode: effectiveFormatCode,
      truncateUnits,
      columnUnits
    }
  };
};
const findImplicitAutoFormat = (columnName, evidenceTypeDescriptor, columnUnitSummary) => {
  let matched = IMPLICIT_COLUMN_AUTO_FORMATS.find(
    (implicitFormat) => implicitFormat.matchingFunction(columnName, evidenceTypeDescriptor, columnUnitSummary)
  );
  if (matched) {
    return matched.format;
  } else {
    if (columnUnitSummary?.unitType === "number") {
      return generateImplicitNumberFormat(columnUnitSummary);
    }
  }
  return void 0;
};
const autoFormat = (typedValue, columnFormat, columnUnitSummary = void 0) => {
  if (columnFormat._autoFormat?.autoFormatFunction) {
    return columnFormat._autoFormat.autoFormatFunction(typedValue, columnFormat, columnUnitSummary);
  } else if (columnFormat._autoFormat.autoFormatCode) {
    let autoFormatCode = columnFormat?._autoFormat?.autoFormatCode;
    let valueType = columnFormat.valueType;
    if ("number" === valueType) {
      let truncateUnits = columnFormat?._autoFormat?.truncateUnits;
      let unitValue = typedValue;
      let unit = "";
      if (truncateUnits && columnUnitSummary?.median !== void 0) {
        unit = getAutoColumnUnit(columnUnitSummary.median);
        unitValue = applyColumnUnits(typedValue, unit);
      }
      return ssf.format(autoFormatCode, unitValue) + unit;
    } else {
      return ssf.format(autoFormatCode, typedValue);
    }
  } else {
    console.warn("autoFormat called without a formatCode or function");
  }
  return typedValue;
};
const fallbackFormat = (typedValue) => {
  if (typeof typedValue === "number") {
    return typedValue.toLocaleString(void 0, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  } else if (typedValue !== void 0 && typedValue !== null) {
    return typedValue?.toString();
  } else {
    return "-";
  }
};
function computeNumberAutoFormatCode(referenceValue, maxDisplayDecimals = 7, significantDigits = AUTO_FORMAT_MEDIAN_PRECISION) {
  let formatCodeBuilder = "#,##0";
  let referenceValueLeadingDigitExponent = base10Exponent(referenceValue);
  let displayDecimals = 0;
  if (referenceValueLeadingDigitExponent - significantDigits < 0) {
    displayDecimals = Math.min(
      Math.max(Math.abs(referenceValueLeadingDigitExponent - significantDigits + 1), 0),
      maxDisplayDecimals
    );
  }
  if (displayDecimals > 0) {
    formatCodeBuilder += ".";
    formatCodeBuilder += "0".repeat(displayDecimals);
  }
  return formatCodeBuilder;
}
function getAutoColumnUnit(value) {
  let absoluteValue = Math.abs(value);
  if (absoluteValue >= 5e12) {
    return "T";
  } else if (absoluteValue >= 5e9) {
    return "B";
  } else if (absoluteValue >= 5e6) {
    return "M";
  } else if (absoluteValue >= 5e3) {
    return "k";
  } else {
    return "";
  }
}
function base10Exponent(value) {
  if (value === 0) {
    return 0;
  } else {
    return Math.floor(Math.log10(value));
  }
}
const SUPPORTED_CURRENCIES = [
  {
    primaryCode: "usd",
    currencySymbol: "$",
    displayName: "USD - United States Dollar"
  },
  {
    primaryCode: "aud",
    currencySymbol: "A$",
    displayName: "AUD - Australian Dollar",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "brl",
    currencySymbol: "R$",
    displayName: "BRL - Brazilian Real",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "cad",
    currencySymbol: "C$",
    displayName: "CAD - Canadian Dollar",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "cny",
    currencySymbol: "¥",
    displayName: "CNY - Renminbi",
    escapeCurrencySymbol: true
  },
  { primaryCode: "eur", currencySymbol: "€", displayName: "EUR - Euro" },
  {
    primaryCode: "gbp",
    currencySymbol: "£",
    displayName: "GBP - Pound Sterling",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "jpy",
    currencySymbol: "¥",
    displayName: "JPY - Japanese Yen",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "inr",
    currencySymbol: "₹",
    displayName: "INR - Indian Rupee",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "krw",
    currencySymbol: "₩",
    displayName: "KRW - South Korean won",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "ngn",
    currencySymbol: "₦",
    displayName: "NGN -  Nigerian Naira",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "rub",
    currencySymbol: "rub",
    displayName: "RUB - Russian Ruble",
    escapeCurrencySymbol: true
  },
  {
    primaryCode: "sek",
    currencySymbol: "kr",
    displayName: "SEK - Swedish Krona",
    escapeCurrencySymbol: true
  }
];
const DERIVED_CURRENCY_FORMATS = [
  {
    derivedSuffix: "",
    valueFormatCode: "#,##0",
    exampleInput: 412.17,
    auto: true
  },
  {
    derivedSuffix: "0",
    valueFormatCode: "#,##0",
    exampleInput: 7043.123
  },
  {
    derivedSuffix: "1",
    valueFormatCode: "#,##0.0",
    exampleInput: 7043.123
  },
  {
    derivedSuffix: "2",
    valueFormatCode: "#,##0.00",
    exampleInput: 7043.123
  },
  {
    derivedSuffix: "0k",
    valueFormatCode: '#,##0,"k"',
    exampleInput: 64301.12
  },
  {
    derivedSuffix: "1k",
    valueFormatCode: '#,##0.0,"k"',
    exampleInput: 64301.12
  },
  {
    derivedSuffix: "2k",
    valueFormatCode: '#,##0.00,"k"',
    exampleInput: 64301.12
  },
  {
    derivedSuffix: "0m",
    valueFormatCode: '#,##0,,"M"',
    exampleInput: 456430112e-2
  },
  {
    derivedSuffix: "1m",
    valueFormatCode: '#,##0.0,,"M"',
    exampleInput: 456430112e-2
  },
  {
    derivedSuffix: "2m",
    valueFormatCode: '#,##0.00,,"M"',
    exampleInput: 456430112e-2
  },
  {
    derivedSuffix: "0b",
    valueFormatCode: '#,##0,,,"B"',
    exampleInput: 978456430112e-2
  },
  {
    derivedSuffix: "1b",
    valueFormatCode: '#,##0.0,,,"B"',
    exampleInput: 978456430112e-2
  },
  {
    derivedSuffix: "2b",
    valueFormatCode: '#,##0.00,,,"B"',
    exampleInput: 978456430112e-2
  }
];
const CURRENCY_FORMATS = SUPPORTED_CURRENCIES.map((currency) => {
  let derivedFormats = [];
  DERIVED_CURRENCY_FORMATS.forEach((derivedFormat) => {
    let next = {
      formatTag: currency.primaryCode + derivedFormat.derivedSuffix,
      parentFormat: currency.primaryCode,
      formatCategory: "currency",
      valueType: "number",
      exampleInput: derivedFormat.exampleInput,
      titleTagReplacement: ` (${currency.currencySymbol})`
    };
    let symbolInFormatCode = currency.escapeCurrencySymbol ? `"${currency.currencySymbol}"` : currency.currencySymbol;
    if (derivedFormat.auto || AUTO_FORMAT_CODE === derivedFormat.formatCode) {
      next.formatCode = AUTO_FORMAT_CODE;
      next._autoFormat = {
        autoFormatFunction: (typedValue, columnFormat, columnUnitSummary) => {
          let format = generateImplicitNumberFormat(columnUnitSummary, 2);
          let effectiveCode = `${symbolInFormatCode}${format._autoFormat.autoFormatCode}`;
          let suffix = "";
          let displayValue = typedValue;
          if (format._autoFormat.truncateUnits && format._autoFormat.columnUnits) {
            suffix = format._autoFormat.columnUnits;
            displayValue = applyColumnUnits(typedValue, format._autoFormat.columnUnits);
          } else {
            if (effectiveCode.endsWith(".0")) {
              effectiveCode = effectiveCode + "0";
            }
          }
          return ssf.format(effectiveCode, displayValue) + suffix;
        }
      };
    } else {
      next.formatCode = `${symbolInFormatCode}${derivedFormat.valueFormatCode}`;
    }
    if (derivedFormat.axisValueFormatCode) {
      next.axisFormatCode = derivedFormat.axisValueFormatCode;
    }
    derivedFormats.push(next);
  });
  return derivedFormats;
}).flat();
const BUILT_IN_FORMATS = [
  ...CURRENCY_FORMATS,
  //auto formats
  // Date/Time:
  {
    formatTag: "ddd",
    formatCode: "ddd",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "dddd",
    formatCode: "dddd",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "mmm",
    formatCode: "mmm",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "mmmm",
    formatCode: "mmmm",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "yyyy",
    formatCode: "yyyy",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "shortdate",
    formatCode: "mmm d/yy",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "longdate",
    formatCode: "mmmm d, yyyy",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "fulldate",
    formatCode: "dddd mmmm d, yyyy",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "mdy",
    formatCode: "m/d/y",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "dmy",
    formatCode: "d/m/y",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09 12:45"
  },
  {
    formatTag: "hms",
    formatCode: "H:MM:SS AM/PM",
    formatCategory: "date",
    valueType: "date",
    exampleInput: "2022-01-09T11:45:03"
  },
  // Numbers:
  {
    formatTag: "num0",
    formatCode: "#,##0",
    formatCategory: "number",
    valueType: "number",
    exampleInput: 11.23168
  },
  {
    formatTag: "num1",
    formatCode: "#,##0.0",
    formatCategory: "number",
    valueType: "number",
    exampleInput: 11.23168
  },
  {
    formatTag: "num2",
    formatCode: "#,##0.00",
    formatCategory: "number",
    valueType: "number",
    exampleInput: 11.23168
  },
  {
    formatTag: "num3",
    formatCode: "#,##0.000",
    formatCategory: "number",
    valueType: "number",
    exampleInput: 11.23168
  },
  {
    formatTag: "num4",
    formatCode: "#,##0.0000",
    formatCategory: "number",
    valueType: "number",
    exampleInput: 11.23168
  },
  {
    formatTag: "num0k",
    formatCode: '#,##0,"k"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 64201
  },
  {
    formatTag: "num1k",
    formatCode: '#,##0.0,"k"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 64201
  },
  {
    formatTag: "num2k",
    formatCode: '#,##0.00,"k"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 64201
  },
  {
    formatTag: "num0m",
    formatCode: '#,##0,,"M"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 42539483
  },
  {
    formatTag: "num1m",
    formatCode: '#,##0.0,,"M"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 42539483
  },
  {
    formatTag: "num2m",
    formatCode: '#,##0.00,,"M"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 42539483
  },
  {
    formatTag: "num0b",
    formatCode: '#,##0,,,"B"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 1384937584
  },
  {
    formatTag: "num1b",
    formatCode: '#,##0.0,,,"B"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 1384937584
  },
  {
    formatTag: "num2b",
    formatCode: '#,##0.00,,,"B"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: 1384937584
  },
  {
    formatTag: "id",
    formatCode: "0",
    formatCategory: "number",
    valueType: "number",
    exampleInput: "921594675",
    titleTagReplacement: " id"
  },
  {
    formatTag: "fract",
    formatCode: "# ?/?",
    formatCategory: "number",
    valueType: "number",
    exampleInput: "0.25"
  },
  {
    formatTag: "mult",
    formatCode: '#,##0.0"x"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: "5.32"
  },
  {
    formatTag: "mult0",
    formatCode: '#,##0"x"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: "5.32"
  },
  {
    formatTag: "mult1",
    formatCode: '#,##0.0"x"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: "5.32"
  },
  {
    formatTag: "mult2",
    formatCode: '#,##0.00"x"',
    formatCategory: "number",
    valueType: "number",
    exampleInput: "5.32"
  },
  {
    formatTag: "sci",
    formatCode: "0.00E+0",
    formatCategory: "number",
    valueType: "number",
    exampleInput: "16546.1561"
  },
  // Percent:
  {
    formatTag: "pct",
    formatCode: AUTO_FORMAT_CODE,
    formatCategory: "percent",
    valueType: "number",
    exampleInput: 0.731,
    titleTagReplacement: "",
    _autoFormat: {
      autoFormatFunction: (typedValue, columnFormat, columnUnitSummary) => {
        if ("number" === columnUnitSummary?.unitType) {
          let adjustedColumnUnitSummary = {
            min: columnUnitSummary.min * 100,
            max: columnUnitSummary.max * 100,
            median: columnUnitSummary.median * 100,
            maxDecimals: Math.max(columnUnitSummary.maxDecimals - 2, 0),
            unitType: columnUnitSummary.unitType
          };
          let format = generateImplicitNumberFormat(adjustedColumnUnitSummary);
          return ssf.format(format._autoFormat.autoFormatCode, typedValue * 100) + "%";
        } else {
          return ssf.format("#,##0%", typedValue);
        }
      }
    }
  },
  {
    formatTag: "pct0",
    formatCode: "#,##0%",
    formatCategory: "percent",
    valueType: "number",
    exampleInput: 0.731,
    titleTagReplacement: ""
  },
  {
    formatTag: "pct1",
    formatCode: "#,##0.0%",
    formatCategory: "percent",
    valueType: "number",
    exampleInput: 0.731,
    titleTagReplacement: ""
  },
  {
    formatTag: "pct2",
    formatCode: "#,##0.00%",
    formatCategory: "percent",
    valueType: "number",
    exampleInput: 0.731,
    titleTagReplacement: ""
  },
  {
    formatTag: "pct3",
    formatCode: "#,##0.000%",
    formatCategory: "percent",
    valueType: "number",
    exampleInput: 0.731,
    titleTagReplacement: ""
  }
];
var EvidenceType;
(function(EvidenceType2) {
  EvidenceType2["BOOLEAN"] = "boolean";
  EvidenceType2["NUMBER"] = "number";
  EvidenceType2["STRING"] = "string";
  EvidenceType2["DATE"] = "date";
})(EvidenceType || (EvidenceType = {}));
var TypeFidelity;
(function(TypeFidelity2) {
  TypeFidelity2["INFERRED"] = "inferred";
  TypeFidelity2["PRECISE"] = "precise";
})(TypeFidelity || (TypeFidelity = {}));
const inferValueType = function(columnValue) {
  if (typeof columnValue === "number") {
    return EvidenceType.NUMBER;
  } else if (typeof columnValue === "boolean") {
    return EvidenceType.BOOLEAN;
  } else if (columnValue instanceof Date) {
    return EvidenceType.DATE;
  } else {
    return EvidenceType.STRING;
  }
};
function inferColumnTypes(rows) {
  if (rows?._evidenceColumnTypes) {
    return rows._evidenceColumnTypes;
  }
  if (rows && rows.length > 0) {
    let columns = Object.keys(rows[0]);
    let columnTypes = columns?.map((column) => {
      let firstRowWithColumnValue = rows.find(
        (element) => element[column] == null ? false : true
      );
      if (firstRowWithColumnValue) {
        let inferredType = inferValueType(firstRowWithColumnValue[column]);
        return { name: column, evidenceType: inferredType, typeFidelity: TypeFidelity.INFERRED };
      } else {
        return {
          name: column,
          evidenceType: EvidenceType.STRING,
          typeFidelity: TypeFidelity.INFERRED
        };
      }
    });
    return columnTypes;
  }
  return [];
}
export {
  BUILT_IN_FORMATS as B,
  EvidenceType as E,
  TypeFidelity as T,
  autoFormat as a,
  fallbackFormat as b,
  inferColumnTypes as c,
  findImplicitAutoFormat as f,
  isAutoFormat as i
};
