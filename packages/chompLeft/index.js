/**
 * Removes a pattern from the beginning of a string.
 * @param {string} string - The string to remove the pattern from.
 * @param {string} pattern - Pattern to remove.
 * @returns {string} Returns a string that does not start with the pattern
 * @example
 * chompLeft('my string', 'my');
 * // returns 'string'
 * @example
 * chompLeft('my string', 'non-matching-pattern');
 * // returns 'my string'
 */
const chompLeft = (string, pattern) => string.replace(new RegExp(`^${pattern}`), '');

export default chompLeft;
