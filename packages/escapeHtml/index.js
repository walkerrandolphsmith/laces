const map = {
  '\'': '&quot;',
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;',
};

export default (string) => {
  const reg = new RegExp(/["'<>]/);
  let match;
  let s = string;

  while ((match = reg.exec(s)) !== null) {
    s = s.substr(0, match.index) + map[match[0]] + s.substr(match.index + 1, s.length);
  }
  return s;
};
