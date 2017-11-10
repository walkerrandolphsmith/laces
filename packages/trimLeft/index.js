/**
 * Remove a pattern from the beginning of a string
 * @param {string} string - The string to remove the pattern from.
 * @param {string} [pattern=' '] - The pattern to remove.
 * @returns {string} Returns a string with the pattern omitted from the beginning.
 * @example
 * // returns 'my string'
 * toLowerCase('my string');
 * @example
 * // returns 'my stringX'
 * toLowerCase('Xmy stringX', 'X');
 */
export default (string, pattern = ' ') => string.replace(new RegExp(`^\\${pattern}*`), '');
