import { manipulations as functions } from '@quillio/stringy-functions';

const chain = function (string) {
    let s = string;

    const wrappedFns = Object
        .keys(functions)
        .reduce((wrappers, key) => {
            const fn = functions[key];

            const wrapped = function (...args) {
                s = fn(s, ...args);
                return this;
            };

            return {
                ...wrappers,
                [key]: wrapped
            };
        }, {});

    return {
        ...wrappedFns,
        value: () => s
    }
};

export default chain;