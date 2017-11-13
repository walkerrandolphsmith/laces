import repeat from '@quillio/stringy-repeat';

/**
 * Prepend a character n times to the string
 * @requires module:@quillio/stringy-repeat
 * @param {string} string - The string to pad
 * @param {number} amount - The number of times a character is prepended
 * @param {string} [character=' '] - The string to prepend
 * @returns {string} Returns string with a character prepended n times
 * @example
 * padRight('my string');
 * // returns 'my string'
 * @example
 * padRight('my string', 1);
 * // returns ' my string'
 * @example
 * padRight('my string', 1, '.');
 * // returns '.my string'
 */
export default (string, amount = 0, character = ' ') => string + repeat(character, amount);
