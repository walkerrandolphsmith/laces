/**
 * Determines if a string only contains characters in english alphabet
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string only contains alpha characters
 * @example
 * isAlpha('my string');
 * // returns true
 * @example
 * isAlpha('my-string');
 * // returns false
 * @example
 * isAlpha('555-5555');
 * // returns false
 */
const isAlpha = string => /^[a-zA-Z]*$/.test(string);

export default isAlpha;
