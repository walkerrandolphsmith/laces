/**
 * Replace a pattern in a string
 * @param {string} string - The string that contains the pattern to replace.
 * @param {string} pattern - The pattern to match
 * @param {string|callback} strategy - A replacement string or function that returns a string
 * @returns {string} Returns string with pattern replaced with strategy
 * @example
 * // returns 'my string'
 * replace('my string');
 * @example
 * // returns 'my replacement'
 * replace('my string', 'string', 'replacement');
 * @example
 * // returns 'my String'
 * replace('my string', 'string', (match) => match.toUppercase());
 */
export default (string, pattern, strategy) => string.replace(pattern, strategy);
