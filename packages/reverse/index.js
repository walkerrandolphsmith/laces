/**
 * Reverse a string. Supports reversing UTF-16 strings.
 * @param {string} string - The string to reverse.
 * @returns {string} Returns a reversed string
 * @example
 * // returns 'my string'
 * reverse('gnirts ym');
 * @example
 * // returns 'anañam anañam'
 * reverse('mañana mañana');
 */
export default (string) => {
  const regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
  const stringWithSwappedSurrogatePairs = string.replace(regexSurrogatePair, '$2$1');

  let result = '';
  let index = string.length;
  while (index) {
    index -= 1;
    result += stringWithSwappedSurrogatePairs.charAt(index);
  }
  return result;
};
