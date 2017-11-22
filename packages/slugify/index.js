import toKebabCase from '@laces/toKebabCase';
import latinise from '@laces/latinise';

/**
 * Convert a string to a valid URL
 * @requires module:@laces/toKebabCase
 * @requires module:@laces/latinise
 * @param {string} [string=''] - The string to convert to a valid URL
 * @returns {string} Returns string that represents a valid URL
 * @example
 * repeat('my string');
 * // returns 'my-string'
 */
const slugify = (string = '') => latinise(toKebabCase(string));

export default slugify;
