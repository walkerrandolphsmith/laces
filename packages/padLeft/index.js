import repeat from '@quillio/repeat';

export default (string, amount=0, char=' ') => repeat(char, amount) + string;