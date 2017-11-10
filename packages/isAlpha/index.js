/**
 * Determines if a string only contains characters in english alphabet
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string only contains alpha characters
 * @example
 * // returns true
 * isAlpha('my string');
 * @example
 * // returns false
 * isAlpha('my-string');
 * @example
 * // returns false
 * isAlpha('555-5555');
 */
export default string => /^[a-zA-Z]*$/.test(string);
