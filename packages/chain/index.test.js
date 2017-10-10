import test from 'ava';
import sut from './index';

test('identity', t => t.true(sut('1').value() === '1'));

test('simple chain', t => {
    const actual = sut('myVar')
        .toSnakeCase()
        .value();
    t.true(actual === 'my_var')
});

test('complex chain', t => {
    const actual = sut('myVar')
        .toSnakeCase()
        .toCamelCase()
        .slugify()
        .padRight(2)
        .value();
    t.true(actual === 'my-var  ')
});