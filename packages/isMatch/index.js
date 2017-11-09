export default (x, y) => {
  let isMismatch = x.length === y.length ? 0 : 1;
  const z = isMismatch ? x : y;

  for (let i = 0, il = x.length; i < il; i++) {
    isMismatch |= (x.charCodeAt(i) ^ z.charCodeAt(i));
  }

  return !isMismatch;
};
