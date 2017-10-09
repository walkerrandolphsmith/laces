export default (string='', leftPattern='', rightPattern='') => {
    const leftIndex = string.indexOf(leftPattern);
    const rightIndex = rightPattern === '' ? string.length : string.indexOf(rightPattern);
    if(leftIndex <= -1 || rightIndex <= -1) return string;
    return string.substring(leftIndex + leftPattern.length, rightIndex)
}