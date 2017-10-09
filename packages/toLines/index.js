export default (string, delimiter='\n') => string
    .split('')
    .reduce((lines, char) => {
        if(char === '\r') return lines;
        char === '\n'
            ? lines.push('')
            : lines[lines.length - 1] += char;
        return lines;
    }, ['']);