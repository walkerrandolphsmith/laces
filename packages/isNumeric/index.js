import isBlank from '@laces/isBlank';

const defaultConfig = {
  integers: true,
  real: true,
};

/**
 * Determines if a string represents a valid number
 * @requires module:@laces/isBlank
 * @param {string} string - The string to query.
 * @param {Object} config - Configuration to specify what numbers sets to include
 * @returns {boolean} Returns true if the string represents a valid number
 * @example
 * isNumeric('1');
 * // returns true
 * @example
 * isNumeric('-1');
 * // returns true
 * @example
 * isNumeric('1.5');
 * // returns true
 * @example
 * isNumeric('-1', { integers: false });
 * // returns false
 * @example
 * isNumeric('1.5', { real: false });
 * // returns false
 * @example
 * isNumeric('my string');
 * // returns false
 */
const isNumeric = (string, config = defaultConfig) => {
  if (typeof string === 'boolean' || Array.isArray(string) || isBlank(string)) {
    return false;
  }

  if (string.startsWith('0') || string.startsWith('-0')) {
    return false;
  }

  const finalConfig = { ...defaultConfig, ...config };

  const isInt = Number.isInteger(Number.parseFloat(string));

  if (finalConfig.integers === false) {
    return isInt && !string.startsWith('-');
  } else if (finalConfig.real === false) {
    return isInt;
  }
  return !Number.isNaN(Number(string));
};

export default isNumeric;
