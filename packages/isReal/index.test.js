import test from 'ava';
import sut from './index';

test('Natural number', t => t.true(sut('1234556')));

test('Integers', t => t.true(sut('-1234556')));

test('Reals', t => t.true(sut('-1234.556')));

test('Padded', t => t.false(sut('-01234556')));

test('Padded', t => t.false(sut('01234556')));

test('Empty string', t => t.false(sut('  ')));