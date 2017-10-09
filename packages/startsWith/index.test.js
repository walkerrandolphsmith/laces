import test from 'ava';
import startsWith from './index';

test('Strings that begin with pattern hit', t => t.true(startsWith('startsend', 'start')));

test('Strings that don\'t begin with pattern misses', t => t.false(startsWith('theend', 'start')));