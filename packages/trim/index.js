import trimLeft from '@quillio/trimLeft';
import trimRight from '@quillio/trimRight';

export default (string, pattern=' ') => trimRight(trimLeft(string, pattern), pattern);