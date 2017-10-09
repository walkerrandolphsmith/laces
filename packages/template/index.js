export default (string, ...args) => {
    const emptyPattern = '{}';

    let newString = string.slice();
    let offset = 0;
    let finalLength = 0;

    const finalString = string.replace(
        /(\{\d{0,1}\})[\w|\s]*/g,
        (match, _, index, original) => {
            const isEmptyPattern = match.startsWith(emptyPattern);

            const i = isEmptyPattern
                ? 0
                : original.substring(index + 1, index + 2);

            let matchLength = 2;

            if(!isEmptyPattern) {
                matchLength = 1;
                for(let k = 0; k < match.length; k++) {
                    if(match[k] === '}') break;
                    matchLength++
                }
            }

            const arg = args[i];

            const start = 0;
            const end = newString.length;

            const offsetIndex = index + offset;
            offset = offset + arg.length - matchLength;

            newString = newString.substring(start, offsetIndex)
                + arg
                + newString.substring(offsetIndex + matchLength, end);

            finalLength = newString.length;

            return newString
        }
    );

    const start = finalString.length - finalLength;
    const end = finalString.length;

    return finalString.slice(start, end);
}