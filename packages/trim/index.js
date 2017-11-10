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
 * // returns 'my string'
 * toLowerCase('my string');
 * @example
 * // returns 'my string'
 * toLowerCase('Xmy stringX', 'X');
 */
export default (string, pattern = ' ') => trimRight(trimLeft(string, pattern), pattern);
