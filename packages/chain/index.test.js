import test from 'ava';
import sut from './index';

test('identity', t => {
  const actual = sut('1')
    .value();
  t.is(actual, '1');
});

test('simple chain', (t) => {
  const actual = sut('myVar')
    .toSnakeCase()
    .value();
  t.is(actual, 'my_var');
});

test('complex chain', (t) => {
  const actual = sut('myVar')
    .toSnakeCase()
    .toCamelCase()
    .slugify()
    .padRight(2)
    .value();
  t.is(actual, 'my-var  ');
});
