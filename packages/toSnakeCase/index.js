/**
 * Convert to snake case
 * @param {string} string - The string to convert to snake case.
 * @returns {string} Returns a snake cased string.
 * @example
 * endsWith('my string');
 * // returns 'my_string'
 * @example
 * endsWith('myString');
 * // returns 'my_string'
 * @example
 * endsWith('my-string');
 * // returns 'my_string'
 */
export default string => string.replace(
  /[A-Z|\-|\s](\w{1})/g,
  (match, _, index, original) => `_${/^[A-Z]/.test(match)
    ? match[0].toLowerCase() + original.substring(index + 1, index + 2)
    : original.substring(index + 1, index + 2)}`,
);
