const log = console.log;

const map = (fn, iter) => {
  const result = [];
  for (const e of iter) {
    result.push(fn(e));
  }
  return result;
};

const filter = (fn, iter) => {
  const result = [];
  for (const e of iter) {
    if (fn(e)) {
      result.push(e);
    }
  }
  return result;
};

const _reduce = (fn, acc, iter) => {
  for (const e of iter) {
    acc = fn(acc, e);
  }
  return acc;
};

const reduce = (fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const e of iter) {
    acc = fn(acc, e);
  }
  return acc;
};

const go = (...args) => reduce((a, fn) => fn(a), args);
