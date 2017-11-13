import toCamelCase from '@quillio/stringy-toCamelCase';

/**
 * Creates a camel cased string.
 * @requires module:@quillio/stringy-toCamelCase
 * @param {string} string - The string to camel case.
 * @returns {string} Returns the camel cased string
 * @example
 * camalize('my string');
 * // returns 'myString'
 */
const camalize = string => toCamelCase(string);

export default camalize;
