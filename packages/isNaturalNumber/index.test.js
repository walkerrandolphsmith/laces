import test from 'ava';
import isNaturalNumber from './index';

test('Natural number', t => t.true(isNaturalNumber('1234556')));

test('Integers', t => t.false(isNaturalNumber('-1234556')));

test('Empty string', t => t.false(isNaturalNumber('  ')));