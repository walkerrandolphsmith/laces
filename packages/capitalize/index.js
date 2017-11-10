/**
 * Creates a capitalized string.
 * @param {string} string - The string to capitalize.
 * @returns {string} Returns the capitalized string
 * @example
 * // returns 'My string'
 * capitalize('my string');
 */
export default string => string.charAt(0).toUpperCase() + string.slice(1);
