/**
 * Convert to an array of characters
 * @param {string} string - The string to convert to an array.
 * @returns {Array<string>} Returns an array of characters from the string.
 * @example
 * toLowerCase('my string');
 * // returns ['m', 'y', ' ', 's', 't', 'r', 'i', 'n', 'g']
 */
const toChars = string => string.split('');

export default toChars;
