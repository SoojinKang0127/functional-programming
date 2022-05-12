const L = {};

L.map = function* (fn, iter) {
  for (const a of iter) {
    yield fn(a);
  }
};

L.filter = function* (fn, iter) {
  for (const a of iter) {
    if (fn(a)) {
      yield a;
    }
  }
};
