import test from 'ava';
import repeat from './index';

test('Repeat string n times', t => t.true(repeat('c', 2) === 'cc'));

test('Repeat string 0 times', t => t.true(repeat('c', 0) === ''));

test('Repeat string default times', t => t.true(repeat('c') === ''));