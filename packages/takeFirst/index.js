/**
 * Create a string that only contains first n characters
 * @param {string} string - The string to remove characters from.
 * @param {number} amount - The number of characters to include.
 * @returns {string} Returns a string with only the first n characters
 * @example
 * takeFirst('my string');
 * // returns 'm'
 * @example
 * takeFirst('my string' 2);
 * // returns 'my'
 */
const takeFirst = (string, amount = 1) => string.substring(0, amount);

export default takeFirst;
