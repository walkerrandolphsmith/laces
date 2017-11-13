/**
 * Reverse a string. Supports reversing UTF-16 strings.
 * @param {string} string - The string to reverse.
 * @returns {string} Returns a reversed string
 * @example
 * reverse('gnirts ym');
 * // returns 'my string'
 * @example
 * reverse('mañana mañana');
 * // returns 'anañam anañam'
 */
const reverse = (string) => {
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

export default reverse;
