export default string => (/^[0|-]/.test(string) ? false : Number.isInteger(Number.parseFloat(string)));
