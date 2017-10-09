export default (string) => string.replace(
    /[A-Z|\-|\s](\w{1})/g,
    (match, _, index, original) => /^[A-Z]/.test(match)
        ? '_' + match[0].toLowerCase() + original.substring(index + 1, index + 2)
        : '_' + original.substring(index + 1, index + 2)
);