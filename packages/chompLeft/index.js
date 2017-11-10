/**
 * Removes a pattern from the beginning of a string.
 * @param {string} string - The string to remove the pattern from.
 * @param {string} pattern - Pattern to remove.
 * @returns {string} Returns a string that does not start with the pattern
 * @example
 * // returns 'string'
 * chompLeft('my string', 'my');
 * @example
 * // returns 'my string'
 * chompLeft('my string', 'non-matching-pattern');
 */
export default (string, pattern) => string.replace(new RegExp(`^${pattern}`), '');
