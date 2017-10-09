export default (string, length, pattern='...') => string.length >= length
    ? string.substring(0, length) + pattern
    : string;