import toChars from '@laces/toChars';

/**
 * Create an array of lines
 * @requires module:@laces/toChars
 * @param {string} string - The string to convert to lines.
 * @param {string} delimiter - The pattern to split lines on.
 * @returns {Array<string>} Returns a kebab cased string.
 * @example
 * toLines('first line\n second line');
 * // returns ['first line', 'second line']
 */
const toLines = (string, delimiter = '\n') => {
  const lines = [''];
  const chars = toChars(string);

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (char !== '\r') {
      if (char === delimiter) {
        lines.push('');
      } else {
        lines[lines.length - 1] += char;
      }
    }
  }

  return lines;
};

export default toLines;
