import isBlank from '@quillio/isBlank'

export default (string) => {
    if(typeof string === 'boolean' || Array.isArray(string) || isBlank(string)) {
        return false
    }

    if(string.startsWith('0') || string.startsWith('-0')) {
        return false;
    }

    return !isNaN(string);
}