import { manipulations as functions } from '@quillio/stringy-functions';

/**
 * @typedef {object} Chain
 * @property {Array<function>}  wrappedFns - Stringy functions.
 * @property {function}  value - Function to return wrapped string
 */

/**
 * Creates a fluent interface to chain stringy operations together.
 * @requires module:@quillio/stringy-functions
 * @param {string} string - The string to chain operations from.
 * @returns {Chain} Returns Chain
 * @example
 * chain('my string')
 *      .value();
 * // returns 'my string'
 * @example
 * chain('my string')
 *      .toCamelCase()
 *      .capitalize()
 *      .repeat(2)
 *      .value();
 * // returns 'MyStringMyString'
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
    // value returns the wrapped string
    value: () => s,
  };
}
