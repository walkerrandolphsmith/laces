import startsWith from '@quillio/stringy-startsWith';

/**
 * Determines if a string can be represented as a valid integer
 * @requires module:@quillio/stringy-startsWith
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string represents a valid integer
 * @example
 * // returns true
 * isInteger('1');
 * @example
 * // returns true
 * isInteger('-1');
 * @example
 * // returns false
 * isInteger('1.5');
 * @example
 * // returns false
 * isInteger('my string');
 */
export default string => !startsWith(string, '0') && Number.isInteger(Number.parseFloat(string));
