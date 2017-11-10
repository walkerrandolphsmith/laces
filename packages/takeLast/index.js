/**
 * Create a string that only contains last n characters
 * @param {string} string - The string to remove characters from.
 * @param {number} amount - The number of characters to include.
 * @returns {string} Returns a string with only the last n characters
 * @example
 * // returns 'g'
 * takeLast('my string');
 * @example
 * // returns 'ng'
 * takeLast('my string' 2);
 */
export default (string, amount = 1) => string.substring(string.length - amount, string.length);
