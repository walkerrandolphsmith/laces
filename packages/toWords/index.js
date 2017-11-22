import toSpaceCase from '@laces/toSpaceCase';

/**
 * Convert to an array of words
 * @requires module:@laces/toSpaceCase
 * @param {string} string - The string to convert to an array.
 * @returns {Array<string>} Returns an array of words from the string
 * @example
 * toLowerCase('My sentence is great');
 * // returns ['my', 'sentence', 'is', 'great']
 */
const toWords = string => toSpaceCase(string).split(' ').filter(w => !!w);

export default toWords;
