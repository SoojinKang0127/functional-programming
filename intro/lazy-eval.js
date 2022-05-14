const L = {};

const range = (l) => {
  let i = -1;
  let arr = [];
  while (++i < l) {
    arr.push(i);
  }
  return arr;
};

L.range = function* (r) {
  let i = -1;
  while (++i < r) {
    yield i;
  }
};

const take = curry((limit, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == limit) return res;
  }
});

L.map = curry(function* (fn, iter) {
  for (const a of iter) {
    yield fn(a);
  }
});

L.filter = curry(function* (fn, iter) {
  for (const a of iter) {
    if (fn(a)) {
      yield a;
    }
  }
});
