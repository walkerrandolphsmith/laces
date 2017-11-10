/**
 * Determines if a string is surrounded by a left and right pattern
 * @param {string} string - The string to query.
 * @param {string} leftPattern - The pattern to match at the beginning of the string.
 * @param {string} rightPattern - The pattern to match at the end of the string.
 * @returns {boolean} Returns true if the string is surrounded by patterns
 * @example
 * // returns true
 * isBetween('my string');
 * @example
 * // returns true
 * isBetween('my string', 'my');
 * @example
 * // returns true
 * isBetween('my string', 'my', 'ing');
 * @example
 * // returns false
 * isBetween('my string', '', 'eng');
 */
export default (string = '', leftPattern = '', rightPattern = '') => {
  const leftIndex = string.indexOf(leftPattern);
  const rightIndex = rightPattern === '' ? string.length : string.indexOf(rightPattern);
  if (leftIndex <= -1 || rightIndex <= -1) {
    return string;
  }
  return string.substring(leftIndex + leftPattern.length, rightIndex);
};
