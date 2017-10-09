import isEmpty from '@quillio/isEmpty'

const defaultConfig = {
    integers: true,
    real: true
};

export default (string, config=defaultConfig) => {
    if(typeof string === 'boolean' || Array.isArray(string) || isEmpty(string)) {
        return false
    }

    if(string.startsWith('0') || string.startsWith('-0')) {
        return false;
    }

    const finalConfig = { ...defaultConfig, ...config };

    const isInt = Number.isInteger(Number.parseFloat(string));

    if(finalConfig.integers === false) {
        return isInt && !string.startsWith('-')
    }
    else if(finalConfig.real === false) {
        return isInt
    }
    return !isNaN(string)
}