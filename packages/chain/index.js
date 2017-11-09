import { manipulations as functions } from '@quillio/stringy-functions';

export default function (string) {
  let s = string;

  const wrappedFns = Object
    .keys(functions)
    .reduce((wrappers, key) => {
      const fn = functions[key];

      function wrapped(...args) {
        s = fn(s, ...args);
        return this;
      }

      return {
        ...wrappers,
        [key]: wrapped,
      };
    }, {});

  return {
    ...wrappedFns,
    value: () => s,
  };
}
