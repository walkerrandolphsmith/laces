import toKebabCase from '@quillio/stringy-toKebabCase';
import latinise from '@quillio/stringy-latinise';

/**
 * Convert a string to a valid URL
 * @requires module:@quillio/stringy-toKebabCase
 * @requires module:@quillio/stringy-latinise
 * @param {string} [string=''] - The string to convert to a valid URL
 * @returns {string} Returns string that represents a valid URL
 * @example
 * // returns 'my-string'
 * repeat('my string');
 */
export default (string = '') => latinise(toKebabCase(string));
