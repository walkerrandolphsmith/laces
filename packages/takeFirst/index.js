/**
 * Create a string that only contains first n characters
 * @param {string} string - The string to remove characters from.
 * @param {number} amount - The number of characters to include.
 * @returns {string} Returns a string with only the first n characters
 * @example
 * // returns 'm'
 * takeFirst('my string');
 * @example
 * // returns 'my'
 * takeFirst('my string' 2);
 */
export default (string, amount = 1) => string.substring(0, amount);
