/**
 * Truncates a string with a specified pattern
 * @param {string} string - The string to truncate.
 * @param {number} length - Max string length before applying clamp.
 * @param {string} [pattern='...'] - Pattern to append to the string.
 * @returns {string} Returns a string that may be truncated
 * @example
 * // returns 'my...'
 * clamp('my string', 1);
 * @example
 * // returns 'my(...)'
 * clamp('my string', 1, '(...)');
 */
export default (string, length, pattern = '...') => (string.length >= length ? `${string.substring(0, length)}${pattern}` : string);
