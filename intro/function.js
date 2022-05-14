const log = console.log;

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((fn, iter) => {
  const result = [];
  for (const e of iter) {
    result.push(fn(e));
  }
  return result;
});

const filter = curry((fn, iter) => {
  const result = [];
  for (const e of iter) {
    if (fn(e)) {
      result.push(e);
    }
  }
  return result;
});

const _reduce = (fn, acc, iter) => {
  for (const e of iter) {
    acc = fn(acc, e);
  }
  return acc;
};

const reduce = curry((fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const e of iter) {
    acc = fn(acc, e);
  }
  return acc;
});

const go = (...args) => reduce((a, fn) => fn(a), args);

const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const range = (r) => {
  let i = -1;
  let arr = [];
  while (++i < r) {
    arr.push(i);
  }
  return arr;
};
