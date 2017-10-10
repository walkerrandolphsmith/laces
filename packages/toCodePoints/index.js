import toChars from '@quillio/toChars';

export default (string) => toChars(string).map(s => s.codePointAt());