import test from 'ava';
import sut from './index';

test('Apply no padding', t => t.deepEqual(sut('name'), 'name'));

test('Default padding', t => t.deepEqual(sut('name', 2), 'name  '));

test('Custom padding', t => t.deepEqual(sut('name', 2, 'x'), 'namexx'));