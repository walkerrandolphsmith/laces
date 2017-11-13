import trimLeft from '@quillio/stringy-trimLeft';
import trimRight from '@quillio/stringy-trimRight';

/**
 * Remove a pattern from the beginning and end of a string
 * @requires module:@quillio/stringy-trimLeft
 * @requires module:@quillio/stringy-trimRight
 * @param {string} string - The string to remove the pattern from.
 * @param {string} [pattern=' '] - The pattern to remove.
 * @returns {string} Returns a string with the pattern omitted from the beginning and end.
 * @example
 * toLowerCase('my string');
 * // returns 'my string'
 * @example
 * toLowerCase('Xmy stringX', 'X');
 * // returns 'my string'
 */
export default (string, pattern = ' ') => trimRight(trimLeft(string, pattern), pattern);
