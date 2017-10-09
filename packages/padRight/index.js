import repeat from '@quillio/repeat';

export default (string, amount=0, char=' ') => {
    return string + repeat(char, amount);
}