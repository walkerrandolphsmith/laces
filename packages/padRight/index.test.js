import test from 'ava';
import padRight from './index';

test('Apply no padding', t => t.deepEqual(padRight('name'), 'name'));

test('Default padding', t => t.deepEqual(padRight('name', 2), 'name  '));

test('Custom padding', t => t.deepEqual(padRight('name', 2, 'x'), 'namexx'));