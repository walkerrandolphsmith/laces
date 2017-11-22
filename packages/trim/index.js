import trimLeft from '@laces/trimLeft';
import trimRight from '@laces/trimRight';

/**
 * Remove a pattern from the beginning and end of a string
 * @requires module:@laces/trimLeft
 * @requires module:@laces/trimRight
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
const trim = (string, pattern = ' ') => trimRight(trimLeft(string, pattern), pattern);

export default trim;
