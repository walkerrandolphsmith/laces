/**
 * Determines if a string only contains characters in english alphabet or numbers
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string only contains alpha characters or numbers
 * @example
 * // returns true
 * isAlphaNumeric('my string');
 * @example
 * // returns true
 * isAlphaNumeric('5555555');
 * @example
 * // returns true
 * isAlphaNumeric('my number 5555555');
 * @example
 * // returns false
 * isAlphaNumeric('my-string');
 */
export default string => /^[a-zA-Z0-9]*$/.test(string);
