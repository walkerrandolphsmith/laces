/**
 * Returns a character at a specified index.
 * @param {string} string - The string to retrieve a character from.
 * @param {number} [index=0] - Position in string.
 * @returns {string} Returns chain function
 * @example
 * charAt('my string');
 * // returns 'm'
 * @example
 * charAt('my string', 1);
 * // returns 'y'
 */
export default (string, index = 0) => string.charAt(index);
