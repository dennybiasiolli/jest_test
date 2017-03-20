const { sum, TestClass } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('TestClass sync', () => {
  const cl = new TestClass(1, 2);
  expect(cl.a).toBe(1);
  expect(cl.b).toBe(2);
  expect(cl.sum()).toBe(3);
});

test('TestClass async', () => {
  const cl = new TestClass(1, 2);
  expect(cl.a).toBe(1);
  expect(cl.b).toBe(2);
  return cl.sumAsync().then((retVal) => {
    expect(retVal).toBe(3);
    // done();
  })
});

describe('pipperepettenusa', () => {
  beforeAll(() => {
    const a = 1;
  });
  beforeEach(() => {
    const a = 1;
  });
  afterEach(() => {
    const a = 1;
  });
  afterAll(() => {
    const a = 1;
  });
  it('skdfgkadshg', () => {
    expect(1).toBe(1);
  });
});