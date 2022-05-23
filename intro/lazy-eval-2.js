const join = curry((sep = ',', iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
);

const find = curry((f, iter) => go(iter, L.filter(f), take(1), ([k]) => k));
