/**
 * Determines if a string starts with a pattern
 * @param {string} string - The string to query.
 * @param {string} pattern - The pattern to match
 * @returns {boolean} Returns true if the string starts with pattern and false otherwise
 * @example
 * startsWith('my string' 'my');
 * // returns true
 * @example
 * startsWith('my string', 'ing');
 * // returns false
 */
const startsWith = (string, pattern) => new RegExp(`^${pattern}`).test(string);

export default startsWith;
