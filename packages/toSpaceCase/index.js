/**
 * Convert to space case
 * @param {string} string - The string to convert to space case.
 * @returns {string} Returns a space cased string.
 * @example
 * endsWith('myString');
 * // returns 'my string'
 * @example
 * endsWith('myString');
 * // returns 'my string'
 * @example
 * endsWith('my-string');
 * // returns 'my string'
 */
const toSpaceCase = string => string.replace(
  /[A-Z|\-|_|\s](\w{1})/g,
  (match, _, index, original) => ` ${/^[A-Z]/.test(match)
    ? match[0].toLowerCase() + original.substring(index + 1, index + 2)
    : original.substring(index + 1, index + 2)}`,
);

export default toSpaceCase;
