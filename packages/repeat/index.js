export default (string, amount = 0) => Array.from(Array(amount), () => string).reduce((ns, char) => ns + char, '');
