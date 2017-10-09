import test from 'ava';
import between from './index';

const left = '<a>';
const right = '</a>';
const match = 'val';
const string = `${left}${match}${right}`;

test('Value between two patterns', t => t.true(between(string, left, right) === match));

test('When left pattern doesnt match return string', t => t.true(between(string, '<!a>', right) === string));

test('When right pattern doesnt match return string', t => t.true(between(string, left, '</!a>') === string));

test('Nested pattern', t => t.true(between(string + right, left, right) === match));

test('Treat "" as string start', t => t.true(between(string, '', right) === left + match));

test('Treat no right pattern as string end', t => t.true(between(string, left) === match + right));