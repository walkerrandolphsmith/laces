import isBlank from '@quillio/stringy-isBlank';

/**
 * Determines if a string represents a valid real number
 * @requires module:@quillio/stringy-isBlank
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string represents a valid real number
 * @example
 * // returns true
 * isNumeric('1');
 * @example
 * // returns true
 * isNumeric('-1');
 * @example
 * // returns true
 * isNumeric('1.5');
 * @example
 * // returns false
 * isNumeric('my string');
 */
export default (string) => {
  if (typeof string === 'boolean' || Array.isArray(string) || isBlank(string)) {
    return false;
  }

  if (string.startsWith('0') || string.startsWith('-0')) {
    return false;
  }

  return !Number.isNaN(string);
};
