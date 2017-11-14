/**
 * Determines if a string contains no characters
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string contains no characters
 * @example
 * isEmpty('');
 * // returns true
 * @example
 * isEmpty(' ');
 * // returns false
 */
const isEmpty = (string = '') => string === '';

export default isEmpty;
