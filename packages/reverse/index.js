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
