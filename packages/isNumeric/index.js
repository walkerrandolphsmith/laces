const defaultConfig = {
    integers: true,
    real: true
};

const patternMap = {
    0: /^[1-9]*\d*$/,
    1: /^[-]?[1-9]*\d*$/,
    2: /^[-]?[1-9]*\.?\d*$/
};

export default (string, config=defaultConfig) => {
    const finalConfig = { ...defaultConfig, ...config };

    let level = 2;
    if(finalConfig.integers === false) {
        level = 0;
    }
    else if(finalConfig.real === false) {
        level = 1;
    }

    const pattern = patternMap[level];

    return new RegExp(pattern).test(string);
}