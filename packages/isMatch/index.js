/**
 * Constant time equality check of two strings
 * @param {string} subject - The subject string.
 * @param {string} compareTo - The string to compare to the subject string.
 * @returns {boolean} Returns true if the string are equal
 * @example
 * // returns true
 * isMatch('password', 'password');
 * @example
 * // returns false
 * isMatch('password', 'wrong password');
 */
export default (subject, compareTo) => {
  let isMismatch = subject.length === compareTo.length ? 0 : 1;
  const z = isMismatch ? subject : compareTo;

  for (let i = 0, il = subject.length; i < il; i++) {
    isMismatch |= (subject.charCodeAt(i) ^ z.charCodeAt(i));
  }

  return !isMismatch;
};
