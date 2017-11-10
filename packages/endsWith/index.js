/**
 * Determines if a string ends with a pattern
 * @param {string} string - The string to query.
 * @param {string} pattern - The pattern to match
 * @returns {boolean} Returns true if the string ends with pattern and false otherwise
 * @example
 * // returns true
 * endsWith('my string', 'ing');
 * @example
 * // returns false
 * endsWith('my string' 'eng');
 */
export default (string, pattern) => new RegExp(`${pattern}$`).test(string);
