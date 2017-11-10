/**
 * Remove a pattern from the end of a string
 * @param {string} string - The string to remove the pattern from.
 * @param {string} [pattern=' '] - The pattern to remove.
 * @returns {string} Returns a string with the pattern omitted from the end.
 * @example
 * // returns 'my string'
 * toLowerCase('my string');
 * @example
 * // returns 'Xmy string'
 * toLowerCase('Xmy stringX', 'X');
 */
export default (string, pattern = ' ') => string.replace(new RegExp(`\\${pattern}*$`), '');
