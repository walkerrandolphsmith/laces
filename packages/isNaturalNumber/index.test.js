import test from 'ava';
import sut from './index';

test('Natural number', t => t.true(sut('1234556')));

test('Integers', t => t.false(sut('-1234556')));

test('Empty string', t => t.false(sut('  ')));
