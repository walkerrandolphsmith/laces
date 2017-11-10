import toChars from '@quillio/stringy-toChars';

/**
 * Include characters in a string that match the predicate
 * @requires module:@quillio/stringy-toChars
 * @param {string} string - The string to remove characters from.
 * @param {function} predicate - Receives each character of string as argument.
 * @returns {string} Returns a string that contains characters that meet predicate.
 * @example
 * // returns 'my string'
 * takeWhile('my string');
 * @example
 * // returns 'mystring'
 * takeWhile('my string' character => character !== ' ');
 */
export default (string, predicate) => (typeof predicate !== 'function' ? string : toChars(string).filter(predicate).join(''));
