/**
 * Removes a pattern from the end of a string.
 * @param {string} string - The string to remove the pattern from.
 * @param {string} pattern - Pattern to remove.
 * @returns {string} Returns a string that does not end with the pattern
 * @example
 * // returns 'my'
 * chompRight('my string', 'string');
 * @example
 * // returns 'my string'
 * chompRight('my string', 'non-matching-pattern');
 */
export default (string, pattern) => string.replace(new RegExp(`${pattern}$`), '');
