/**
 * Determines if a string only contains whitespace
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string only contains whitespace
 * @example
 * // returns true
 * isBlank('');
 * @example
 * // returns true
 * isBlank(' ');
 * @example
 * // returns true
 * isBlank('\n');
 * @example
 * // returns false
 * isBlank('my string');
 */
export default (string = null) => string === null || string.trim() === '';
