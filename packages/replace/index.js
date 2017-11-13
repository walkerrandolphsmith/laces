/**
 * Replace a pattern in a string
 * @param {string} string - The string that contains the pattern to replace.
 * @param {string} pattern - The pattern to match
 * @param {string|callback} strategy - A replacement string or function that returns a string
 * @returns {string} Returns string with pattern replaced with strategy
 * @example
 * replace('my string');
 * // returns 'my string'
 * @example
 * replace('my string', 'string', 'replacement');
 * // returns 'my replacement'
 * @example
 * replace('my string', 'string', (match) => match.toUppercase());
 * // returns 'my String'
 */
export default (string, pattern, strategy) => string.replace(pattern, strategy);
