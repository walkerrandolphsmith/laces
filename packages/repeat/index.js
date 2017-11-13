/**
 * Concat a string to itself n times
 * @param {string} string - The string to repeat
 * @param {number} [amount=1] - The number of times to repeat
 * @returns {string} Returns repeated string
 * @example
 * repeat('my string');
 * // returns 'my string'
 * @example
 * repeat('my string', 0);
 * // returns ''
 * @example
 * repeat('my string', 2);
 * // returns 'my stringmy string'
 */
export default (string, amount = 1) => Array.from(Array(amount), () => string).reduce((ns, char) => ns + char, '');
