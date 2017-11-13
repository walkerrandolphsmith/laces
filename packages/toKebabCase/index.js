/**
 * Convert to kebab case
 * @param {string} string - The string to convert to kebab case.
 * @returns {string} Returns a kebab cased string.
 * @example
 * endsWith('my string');
 * // returns 'my-string'
 * @example
 * endsWith('myString');
 * // returns 'my-string'
 * @example
 * endsWith('my_string');
 * // returns 'my-string'
 */
const toKebabCase = string => string.replace(
  /[A-Z|_|\s](\w{1})/g,
  (match, _, index, original) => `-${/^[A-Z]/.test(match)
    ? match[0].toLowerCase() + original.substring(index + 1, index + 2)
    : original.substring(index + 1, index + 2)}`,
);

export default toKebabCase;
