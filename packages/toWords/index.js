import toSpaceCase from '@quillio/stringy-toSpaceCase';

/**
 * Convert to an array of words
 * @requires module:@quillio/stringy-toSpaceCase
 * @param {string} string - The string to convert to an array.
 * @returns {Array<string>} Returns an array of words from the string
 * @example
 * // returns ['my', 'sentence', 'is', 'great']
 * toLowerCase('My sentence is great');
 */
export default string => toSpaceCase(string).split(' ').filter(w => !!w);
