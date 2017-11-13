/**
 * Create a string that only contains last n characters
 * @param {string} string - The string to remove characters from.
 * @param {number} amount - The number of characters to include.
 * @returns {string} Returns a string with only the last n characters
 * @example
 * takeLast('my string');
 * // returns 'g'
 * @example
 * takeLast('my string' 2);
 * // returns 'ng'
 */
export default (string, amount = 1) => string.substring(string.length - amount, string.length);
