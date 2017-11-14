/**
 * Truncates a string with a specified pattern
 * @param {string} string - The string to truncate.
 * @param {number} length - Max string length before applying clamp.
 * @param {string} [pattern='...'] - Pattern to append to the string.
 * @returns {string} Returns a string that may be truncated
 * @example
 * clamp('my string', 1);
 * // returns 'my...'
 * @example
 * clamp('my string', 1, '(...)');
 * // returns 'my(...)'
 */
const clamp = (string, length, pattern = '...') => (string.length >= length ? `${string.substring(0, length)}${pattern}` : string);

export default clamp;
