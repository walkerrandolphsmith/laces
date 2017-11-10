const map = {
  '\'': '&quot;',
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;',
};

/**
 * Replaces HTML characters with their HTML entities
 * @param {string} string - The string to replace HTML characters.
 * @returns {string} Returns string with HTML characters replaced with corresponding HTML entities
 * @example
 * // returns '&lt;p&gt;my string&lt;/p&gt;'
 * escapeHtml('<p>my string</p>');
 * @example
 * // returns 'my string'
 * escapeHtml('my string');
 */
export default (string) => {
  const reg = new RegExp(/["'<>]/);
  let match;
  let s = string;

  while ((match = reg.exec(s)) !== null) {
    s = s.substr(0, match.index) + map[match[0]] + s.substr(match.index + 1, s.length);
  }
  return s;
};
