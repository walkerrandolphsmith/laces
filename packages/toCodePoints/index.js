import toChars from '@quillio/stringy-toChars';

/**
 * Convert to an array of code points
 * @requires module:@quillio/stringy-toChars
 * @param {string} string - The string to convert to an array.
 * @returns {Array<string>} Returns an array of code points from the string.
 * @example
 * toLowerCase('😀 awesome');
 * // returns [55357, 56832, 32, 97, 119, 101, 115, 111, 109, 101]
 */
const toCodePoints = string => toChars(string).map(s => s.codePointAt());

export default toCodePoints;
