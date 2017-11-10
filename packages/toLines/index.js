import toChars from '@quillio/stringy-toChars';

/**
 * Create an array of lines
 * @requires module:@quillio/stringy-toChars
 * @param {string} string - The string to convert to lines.
 * @param {string} delimiter - The pattern to split lines on.
 * @returns {Array<string>} Returns a kebab cased string.
 * @example
 * // returns ['first line', 'second line']
 * toLines('first line\n second line');
 */
export default (string, delimiter = '\n') => {
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
