import toChars from '@quillio/stringy-toChars';

/**
 * Include characters in a string that match the predicate
 * @requires module:@quillio/stringy-toChars
 * @param {string} string - The string to remove characters from.
 * @param {function} predicate - Receives each character of string as argument.
 * @returns {string} Returns a string that contains characters that meet predicate.
 * @example
 * takeWhile('my string');
 * // returns 'my string'
 * @example
 * takeWhile('my string' character => character !== ' ');
 * // returns 'mystring'
 */
const takeWhile = (string, predicate) => (typeof predicate !== 'function' ? string : toChars(string).filter(predicate).join(''));

export default takeWhile;
