/**
 * Determines if a string represents a natural number
 * @param {string} string - The string to query.
 * @returns {boolean} Returns true if the string represents a valid natural number
 * @example
 * isBlank('1');
 * // returns true
 * @example
 * isBlank('-1');
 * // returns false
 * @example
 * isBlank('1.5');
 * // returns false
 * @example
 * isBlank('my string');
 * // returns false
 */
export default string => (/^[0|-]/.test(string) ? false : Number.isInteger(Number.parseFloat(string)));
