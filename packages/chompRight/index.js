/**
 * Removes a pattern from the end of a string.
 * @param {string} string - The string to remove the pattern from.
 * @param {string} pattern - Pattern to remove.
 * @returns {string} Returns a string that does not end with the pattern
 * @example
 * chompRight('my string', 'string');
 * // returns 'my'
 * @example
 * chompRight('my string', 'non-matching-pattern');
 * // returns 'my string'
 */
const chompRight = (string, pattern) => string.replace(new RegExp(`${pattern}$`), '');

export default chompRight;
