import test from 'ava';
import sut from './index';

test('Natural number', t => t.true(sut('1234556')));

test('Integer', t => t.true(sut('-1111111')));

test('Integer', t => t.true(sut('-11110.111')));

test('Real number', t => t.true(sut('-111.111')));

test('Real number', t => t.true(sut('111.111')));

test('Can not pad with 0s', t => t.false(sut('0111.111')));

test('Only alphas misses', t => t.false(sut('name')));

test('Alpanumeric misses', t => t.false(sut('1asd111111')));

test('Non alpha-numeric chars misses', t => t.false(sut('555-5555')));

test('Empty string misses', t => t.false(sut('  ')));

test('Empty array misses', t => t.false(sut([])));

test('Boolean misses', t => t.false(sut(true)));

test('real=false reals don\'t match', t => t.false(sut('-111.111', { real: false })));

test('real=false integers match', t => t.true(sut('-111111', { real: false })));

test('real=false naturals match', t => t.true(sut('111111', { real: false })));

test('integers=false reals don\'t match', t => t.false(sut('-111.111', { integers: false })));

test('integers=false integers don\'t match', t => t.false(sut('-111111', { integers: false })));

test('integers=false naturals match', t => t.true(sut('111111', { integers: false })));
