/**
 * Creates a capitalized string.
 * @param {string} string - The string to capitalize.
 * @returns {string} Returns the capitalized string
 * @example
 * capitalize('my string');
 * // returns 'My string'
 */
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default capitalize;
