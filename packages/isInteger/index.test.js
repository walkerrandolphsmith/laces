import test from 'ava';
import isInteger from './index';

test('Natural number', t => t.true(isInteger('1234556')));

test('Integers', t => t.true(isInteger('-1234556')));

test('Empty string', t => t.false(isInteger('  ')));