import toChars from '@quillio/stringy-toChars';

export default string => toChars(string).map(s => s.codePointAt());
