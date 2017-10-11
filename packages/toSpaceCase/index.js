export default (string) => string.replace(
    /[A-Z|\-|_|\s](\w{1})/g,
    (match, _, index, original) => /^[A-Z]/.test(match)
        ? ' ' + match[0].toLowerCase() + original.substring(index + 1, index + 2)
        : ' ' + original.substring(index + 1, index + 2)
);