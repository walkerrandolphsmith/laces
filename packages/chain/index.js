import { manipulations as functions } from '@quillio/stringy-functions';

/**
 * Creates a fluent interface to chain stringy operations together.
 * Escape the wrapper by invoking `value` and retrieve the wrapped string.
 * @requires module:@quillio/stringy-functions
 * @param {string} string - The string to chain operations from.
 * @returns {string} Returns chain function
 * @example
 * // returns 'my string'
 * chain('my string').value();
 * @example
 * // returns 'MyStringMyString'
 * chain('my string')
 *      .toCamelCase()
 *      .capitalize()
 *      .repeat(2)
 *      .value();
 */
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
