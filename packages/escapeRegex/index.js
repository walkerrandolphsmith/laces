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
export default string => string.replace(/[-[\]/{}()*+?.\\^$|]/g, match => `\\${match}`);
