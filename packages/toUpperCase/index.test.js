import test from 'ava';
import toUpperCase from './index';

test('All caps', t => t.true(toUpperCase('myVar') === 'MYVAR'));