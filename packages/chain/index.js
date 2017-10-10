import functions from './functions';

const chain = (string) => {
    const wrappedFns = Object.keys(functions).reduce((wrappers, key) => {
        const fn = functions[key];

        const wrapped = (...args) => chain(fn(string, ...args));

        return {
            ...wrappers,
            [key]: wrapped
        };
    }, {});

    return {
        ...wrappedFns,
        value: () => string
    }
};

export default chain;