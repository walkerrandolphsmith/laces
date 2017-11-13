import repeat from '@quillio/stringy-repeat';

/**
 * Append a character n times to the string
 * @requires module:@quillio/stringy-repeat
 * @param {string} string - The string to pad
 * @param {number} amount - The number of times a character is appended
 * @param {string} [character=' '] - The string to prepend
 * @returns {string} Returns string with a character appended n times
 * @example
 * padLeft('my string');
 * // returns 'my string'
 * @example
 * padLeft('my string', 1);
 * // returns ' my string'
 * @example
 * padLeft('my string', 1, '.');
 * // returns '.my string'
 */
export default (string, amount = 0, character = ' ') => repeat(character, amount) + string;
