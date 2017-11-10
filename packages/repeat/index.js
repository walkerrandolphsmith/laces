/**
 * Concat a string to itself n times
 * @param {string} string - The string to repeat
 * @param {number} [amount=1] - The number of times to repeat
 * @returns {string} Returns repeated string
 * @example
 * // returns 'my string'
 * repeat('my string');
 * @example
 * // returns ''
 * repeat('my string', 0);
 * @example
 * // returns 'my stringmy string'
 * repeat('my string', 2);
 */
export default (string, amount = 1) => Array.from(Array(amount), () => string).reduce((ns, char) => ns + char, '');
