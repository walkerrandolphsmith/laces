import capitalize from '@quillio/stringy-capitalize';

/**
 * Convert to camel case
 * @requires module:@quillio/stringy-capitalize
 * @param {string} string - The string to convert to camel case.
 * @returns {string} Returns a camel cased string.
 * @example
 * // returns 'myString'
 * toCamelCase('my string');
 * @example
 * // returns 'my string'
 * toCamelCase('my string');
 */
export default string => string.replace(
  /[_|\-|\s](\w{1})/g,
  (_, __, index, original) => capitalize(original.substring(index + 1, index + 2)),
);
