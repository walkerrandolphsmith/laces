/**
 * Determines if a string represents a natural number
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string represents a valid natural number
 * @example
 * // returns true
 * isBlank('1');
 * @example
 * // returns false
 * isBlank('-1');
 * @example
 * // returns false
 * isBlank('1.5');
 * @example
 * // returns false
 * isBlank('my string');
 */
export default string => (/^[0|-]/.test(string) ? false : Number.isInteger(Number.parseFloat(string)));
