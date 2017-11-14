/**
 * Escapes Regex special characters
 * @param {string} string - The string to escape regex characters.
 * @returns {string} Returns string with escaped regex characters.
 * @example
 * endsWith('.*');
 * // returns '\.\*'
 * @example
 * endsWith('my string');
 * // returns 'my string'
 */
const escapeRegex = string => string.replace(/[-[\]/{}()*+?.\\^$|]/g, match => `\\${match}`);

export default escapeRegex;
