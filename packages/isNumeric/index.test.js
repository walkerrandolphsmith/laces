import test from 'ava';
import isNumeric from './index';

test('Natural number', t => t.true(isNumeric('1234556')));

test('Integer', t => t.true(isNumeric('-1111111')));

test('Integer', t => t.true(isNumeric('-11110.111')));

test('Real number', t => t.true(isNumeric('-111.111')));

test('Real number', t => t.true(isNumeric('111.111')));

test('Can not pad with 0s', t => t.false(isNumeric('0111.111')));

test('Only alphas misses', t => t.false(isNumeric('name')));

test('Alpanumeric misses', t => t.false(isNumeric('1asd111111')));

test('Non alpha-numeric chars misses', t => t.false(isNumeric('555-5555')));

test('Empty string misses', t => t.false(isNumeric('  ')));

test('Empty array misses', t => t.false(isNumeric([])));

test('Boolean misses', t => t.false(isNumeric(true)));

test('real=false reals don\'t match', t => t.false(isNumeric('-111.111', { real: false })));

test('real=false integers match', t => t.true(isNumeric('-111111', { real: false })));

test('real=false naturals match', t => t.true(isNumeric('111111', { real: false })));

test('integers=false reals don\'t match', t => t.false(isNumeric('-111.111', { integers: false })));

test('integers=false integers don\'t match', t => t.false(isNumeric('-111111', { integers: false })));

test('integers=false naturals match', t => t.true(isNumeric('111111', { integers: false })));