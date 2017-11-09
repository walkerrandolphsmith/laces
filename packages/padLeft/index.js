import repeat from '@quillio/stringy-repeat';

export default (string, amount = 0, char = ' ') => repeat(char, amount) + string;
