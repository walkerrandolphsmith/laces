import test from 'ava';
import sut from './index';

const left = '<a>';
const right = '</a>';
const match = 'val';
const string = `${left}${match}${right}`;

test('Value is between two patterns', t => t.is(sut(string, left, right), true));

test('When left pattern does not match return string', t => t.is(sut(string, '<!a>', right), false));

test('When right pattern does not match return string', t => t.is(sut(string, left, '</!a>'), false));

test('Nested pattern', t => t.is(sut(string + right, left, right), true));

test('Empty left pattern', t => t.is(sut(string, '', right), true));

test('Empty right pattern', t => t.is(sut(string, left, ''), true));

test('No left pattern', t => t.is(sut(string, undefined, right), true));

test('No right pattern', t => t.is(sut(string, left), true));
