/* Just something fun, inspired by a basic computing video I watched recently. */

const ops = {

  taut: () => true,
  contra: () => false,

  prop: a => a,
  not: a => !a,

  and: (a,b) => a && b,
  nand: (a,b) => !(a && b),

  or: (a,b) => a || b,
  nor: (a,b) => !(a || b),

  xor: (a,b) => (a || b) && !(a && b),
  iff: (a,b) => !((a || b) && !(a && b)),

  xpropA: (a,b) => a && !b,
  nxpropA: (a,b) => !(a && !b),

  xpropB: (a,b) => !a && b,
  nxpropB: (a,b) => !(!a && b),

  test: {
    taut: '1111',
    contra: '0000',

    prop: '0011',
    not: '1100',

    and: '0001',
    nand: '1110',

    or: '0111',
    nor: '1000',

    xor: '0110',
    iff: '1001',

    xpropA: '0010',
    nxpropA: '1101',

    xpropB: '0100',
    nxpropB: '1011'
  }
}

const test = cb => {
  if (cb != undefined) {
    let str = '';
    str += Number(cb(0,0));
    str += Number(cb(0,1));
    str += Number(cb(1,0));
    str += Number(cb(1,1));
    return str;
  }
};

const runTest = () => {
  for (const op in ops) {
    if (op != 'test') {
      const r = test(ops[op]);
      const t = ops.test[op];
      const p = t == r ? 'pass' : 'fail';

      console.log(`${op}: ${p}, ${r}, ${t}`);
    }
  }
}

runTest();
