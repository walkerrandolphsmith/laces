/**
 * Determines if a string contains no characters
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string contains no characters
 * @example
 * // returns true
 * isEmpty('');
 * @example
 * // returns false
 * isEmpty(' ');
 */
export default (string = '') => string === '';
