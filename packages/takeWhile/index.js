import toChars from '@quillio/stringy-toChars';

const noop = c => c;

export default (string, predicate=noop) => {
    if(typeof predicate !== 'function') {
        predicate = noop;
    }

    return toChars(string).filter(predicate).join('');
}