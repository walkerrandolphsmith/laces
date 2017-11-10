/**
 * Determines if a string starts with a pattern
 * @param {string} string - The string to query.
 * @param {string} pattern - The pattern to match
 * @returns {boolean} Returns true if the string starts with pattern and false otherwise
 * @example
 * // returns true
 * startsWith('my string' 'my');
 * @example
 * // returns false
 * startsWith('my string', 'ing');
 */
export default (string, pattern) => new RegExp(`^${pattern}`).test(string);
