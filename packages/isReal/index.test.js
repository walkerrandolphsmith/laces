import test from 'ava';
import isReal from './index';

test('Natural number', t => t.true(isReal('1234556')));

test('Integers', t => t.true(isReal('-1234556')));

test('Reals', t => t.true(isReal('-1234.556')));

test('Padded', t => t.false(isReal('-01234556')));

test('Padded', t => t.false(isReal('01234556')));

test('Empty string', t => t.false(isReal('  ')));