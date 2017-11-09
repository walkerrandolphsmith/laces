export default (fn, x) => {
  let start;
  let end;
  const times = [];

  for (let i = 0; i < 1000; i++) {
    start = process.hrtime();
    fn(x);
    end = process.hrtime(start);
    times.push(end[1] / 1000000);
  }

  return times.reduce((sum, n) => sum + n, 0) / times.length;
};
