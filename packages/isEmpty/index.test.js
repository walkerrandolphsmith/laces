import test from 'ava';
import isEmpty from './index';

test('undefined is an empty string', t => t.true(isEmpty()));

test('"" is an empty string', t => t.true(isEmpty('')));

test('Single whitespace is not empty', t => t.false(isEmpty(' ')));

test('Whitespace is not empty', t => t.false(isEmpty('\n\n\t')));

test('words are not empty', t => t.false(isEmpty('a')));