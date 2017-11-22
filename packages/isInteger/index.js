import startsWith from '@laces/startsWith';

/**
 * Determines if a string can be represented as a valid integer
 * @requires module:@laces/startsWith
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string represents a valid integer
 * @example
 * isInteger('1');
 * // returns true
 * @example
 * isInteger('-1');
 * // returns true
 * @example
 * isInteger('1.5');
 * // returns false
 * @example
 * isInteger('my string');
 * // returns false
 */
const isInteger = string => !startsWith(string, '0') && Number.isInteger(Number.parseFloat(string));

export default isInteger;
