import test from 'ava';
import sut from './index';

test('undefined is an empty string', t => t.true(sut()));

test('"" is an empty string', t => t.true(sut('')));

test('Single whitespace is not empty', t => t.false(sut(' ')));

test('Whitespace is not empty', t => t.false(sut('\n\n\t')));

test('words are not empty', t => t.false(sut('a')));
