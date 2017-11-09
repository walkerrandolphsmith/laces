export default (string, pattern) => string.replace(new RegExp(`^${pattern}`), '');
