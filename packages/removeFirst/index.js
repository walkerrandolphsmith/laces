/**
 * Remove first occurrence of a pattern from a string
 * @param {string} string - The string remove the pattern from
 * @param {string} [pattern=''] - The pattern to omit
 * @returns {string} Returns string with the pattern omitted
 * @example
 * // returns 'my string'
 * remove('my string');
 * @example
 * // returns ' string'
 * remove('my string', 'my');
 * @example
 * // returns 'my '
 * remove('my string', 'string');
 * @example
 * // returns 'my string'
 * remove('my my string', 'my ');
 */
export default (string, pattern = '') => string.replace(new RegExp(`${pattern}`), '');
