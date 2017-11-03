const reverse = (string) => {
    const regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

    string = string.replace(regexSurrogatePair, '$2$1');

    let result = '';
    let index = string.length;
    while (index--) {
        result += string.charAt(index);
    }
    return result;
};

export default reverse;