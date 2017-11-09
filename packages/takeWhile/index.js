import toChars from '@quillio/stringy-toChars';

export default (string, predicate) => (typeof predicate !== 'function' ? string : toChars(string).filter(predicate).join(''));
