/**
 * Removes whitespace from a string
 * @param {string} string - String to remove whitespace from.
 * @returns {string} Returns a string without whitespace
 * @example
 * collapse('  my string  ');
 * // returns 'mystring'
 * @example
 * collapse('\tmy string\n');
 * // returns 'mystring'
 */
const collapse = string => string.replace(/\s/g, '');

export default collapse;
