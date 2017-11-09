import trimLeft from '@quillio/stringy-trimLeft';
import trimRight from '@quillio/stringy-trimRight';

export default (string, pattern = ' ') => trimRight(trimLeft(string, pattern), pattern);
