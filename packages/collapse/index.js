/**
 * Removes whitespace from a string
 * @param {string} string - String to remove whitespace from.
 * @returns {string} Returns a string without whitespace
 * @example
 * // returns 'mystring'
 * collapse('  my string  ');
 * @example
 * // returns 'mystring'
 * collapse('\tmy string\n');
 */
export default string => string.replace(/\s/g, '');
