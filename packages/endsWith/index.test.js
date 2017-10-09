import test from 'ava';
import endsWith from './index';

test('Strings that end with pattern hit', t => t.true(endsWith("theend", 'end')));

test('Strings doesn\'t end with pattern misses', t => t.false(endsWith("theend", 'start')));