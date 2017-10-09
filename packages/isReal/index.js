import isEmpty from '@quillio/isEmpty'

export default (string) => {
    if(typeof string === 'boolean' || Array.isArray(string) || isEmpty(string)) {
        return false
    }

    if(string.startsWith('0') || string.startsWith('-0')) {
        return false;
    }

    return !isNaN(string)
}