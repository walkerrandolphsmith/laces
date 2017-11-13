/**
 * Remove a pattern from the beginning of a string
 * @param {string} string - The string to remove the pattern from.
 * @param {string} [pattern=' '] - The pattern to remove.
 * @returns {string} Returns a string with the pattern omitted from the beginning.
 * @example
 * toLowerCase('my string');
 * // returns 'my string'
 * @example
 * toLowerCase('Xmy stringX', 'X');
 * // returns 'my stringX'
 */
export default (string, pattern = ' ') => string.replace(new RegExp(`^\\${pattern}*`), '');
