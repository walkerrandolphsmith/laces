/**
 * Determines if a string only contains whitespace
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string only contains whitespace
 * @example
 * isBlank('');
 * // returns true
 * @example
 * isBlank(' ');
 * // returns true
 * @example
 * isBlank('\n');
 * // returns true
 * @example
 * isBlank('my string');
 * // returns false
 */
const isBlank = (string = null) => string === null || string.trim() === '';

export default isBlank;
