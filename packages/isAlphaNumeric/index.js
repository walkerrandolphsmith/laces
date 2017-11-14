/**
 * Determines if a string only contains characters in english alphabet or numbers
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string only contains alpha characters or numbers
 * @example
 * isAlphaNumeric('my string');
 * // returns true
 * @example
 * isAlphaNumeric('5555555');
 * // returns true
 * @example
 * isAlphaNumeric('my number 5555555');
 * // returns true
 * @example
 * isAlphaNumeric('my-string');
 * // returns false
 */
const isAlphaNumeric = string => /^[a-zA-Z0-9]*$/.test(string);

export default isAlphaNumeric;
