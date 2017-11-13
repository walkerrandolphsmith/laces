/**
 * Remove first occurrence of a pattern from a string
 * @param {string} string - The string remove the pattern from
 * @param {string} [pattern=''] - The pattern to omit
 * @returns {string} Returns string with the pattern omitted
 * @example
 * remove('my string');
 * // returns 'my string'
 * @example
 * remove('my string', 'my');
 * // returns ' string'
 * @example
 * remove('my string', 'string');
 * // returns 'my '
 * @example
 * remove('my my string', 'my ');
 * // returns 'my string'
 */
export default (string, pattern = '') => string.replace(new RegExp(`${pattern}`), '');
