import test from 'ava';
import isBetween from './index';

const left = '<a>';
const right = '</a>';
const match = 'val';
const string = `${left}${match}${right}`;

test('Value isBetween two patterns', t => t.true(isBetween(string, left, right) === match));

test('When left pattern doesnt match return string', t => t.true(isBetween(string, '<!a>', right) === string));

test('When right pattern doesnt match return string', t => t.true(isBetween(string, left, '</!a>') === string));

test('Nested pattern', t => t.true(isBetween(string + right, left, right) === match));

test('Treat "" as string start', t => t.true(isBetween(string, '', right) === left + match));

test('Treat no right pattern as string end', t => t.true(isBetween(string, left) === match + right));