import repeat from '@laces/repeat';

/**
 * Append a character n times to the string
 * @requires module:@laces/repeat
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
const padLeft = (string, amount = 0, character = ' ') => repeat(character, amount) + string;

export default padLeft;
