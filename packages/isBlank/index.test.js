import test from 'ava';
import sut from './index';

test('undefined is blank', t => t.true(sut()));

test('Single whitespace is blank', t => t.true(sut(' ')));

test('Only whitespace is blank', t => t.true(sut('\n\n\t')));

test('words are not blank', t => t.false(sut('a')));