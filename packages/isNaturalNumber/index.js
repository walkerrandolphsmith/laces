export default (string) => {
    if(/^[0|-]/.test(string)) {
        return false;
    }

    return Number.isInteger(Number.parseFloat(string));
}