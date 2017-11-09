import toChars from '@quillio/stringy-toChars';

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
