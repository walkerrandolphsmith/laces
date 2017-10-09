import test from 'ava';
import padLeft from './index';

test('Apply no padding', t => t.deepEqual(padLeft('name'), 'name'));

test('Default padding', t => t.deepEqual(padLeft('name', 2), '  name'));

test('Custom padding', t => t.deepEqual(padLeft('name', 2, 'x'), 'xxname'));