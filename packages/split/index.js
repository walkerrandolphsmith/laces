/**
 * Group sections of a string, using a delimiter, into an array
 * @param {string} string - The string to convert to an array
 * @param {string} [pattern=' '] - The number of times to repeat
 * @returns {Array} Returns array of substrings
 * @example
 * repeat('my string');
 * // returns ['my', 'string']
 * @example
 * repeat('AA_BB_CC', '_');
 * // returns ['AA', 'BB', 'CC']
 */
export default (string, pattern = ' ') => string.split(pattern);
