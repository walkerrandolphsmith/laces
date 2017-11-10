/**
 * Group sections of a string, using a delimiter, into an array
 * @param {string} string - The string to convert to an array
 * @param {string} [pattern=' '] - The number of times to repeat
 * @returns {Array} Returns array of substrings
 * @example
 * // returns ['my', 'string']
 * repeat('my string');
 * @example
 * // returns ['AA', 'BB', 'CC']
 * repeat('AA_BB_CC', '_');
 */
export default (string, pattern = ' ') => string.split(pattern);
