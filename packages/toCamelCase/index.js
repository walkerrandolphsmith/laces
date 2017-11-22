import capitalize from '@laces/capitalize';

/**
 * Convert to camel case
 * @requires module:@laces/capitalize
 * @param {string} string - The string to convert to camel case.
 * @returns {string} Returns a camel cased string.
 * @example
 * toCamelCase('my string');
 * // returns 'myString'
 * @example
 * toCamelCase('my string');
 * // returns 'my string'
 */
const toCamelCase = string => string.replace(
  /[_|\-|\s](\w{1})/g,
  (_, __, index, original) => capitalize(original.substring(index + 1, index + 2)),
);

export default toCamelCase;
