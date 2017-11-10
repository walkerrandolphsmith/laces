/**
 * Returns a character at a specified index.
 * @param {string} string - The string to retrieve a character from.
 * @param {number} [index=0] - Position in string.
 * @returns {string} Returns chain function
 * @example
 * // returns 'm'
 * charAt('my string');
 * @example
 * // returns 'y'
 * charAt('my string', 1);
 */
export default (string, index = 0) => string.charAt(index);
