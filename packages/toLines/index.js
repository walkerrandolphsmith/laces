import toChars from '@quillio/stringy-toChars';

export default (string, delimiter='\n') => toChars(string)
    .reduce((lines, char) => {
        if(char === '\r') return lines;
        char === '\n'
            ? lines.push('')
            : lines[lines.length - 1] += char;
        return lines;
    }, ['']);