import test from 'ava';
import sut from './index';

const left = '<a>';
const right = '</a>';
const match = 'val';
const string = `${left}${match}${right}`;

test('Value sut two patterns', t => t.is(sut(string, left, right), match));

test('When left pattern doesnt match return string', t => t.is(sut(string, '<!a>', right), string));

test('When right pattern doesnt match return string', t => t.is(sut(string, left, '</!a>'), string));

test('Nested pattern', t => t.is(sut(string + right, left, right), match));

test('Treat "" as string start', t => t.is(sut(string, '', right), left + match));

test('Treat no right pattern as string end', t => t.is(sut(string, left), match + right));
