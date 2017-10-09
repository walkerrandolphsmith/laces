import test from 'ava';
import isEmpty from './index';

test('undefined is an empty string', t => t.true(isEmpty()));

test('Single whitespace is empty string', t => t.true(isEmpty(' ')));

test('Only whitespace is empty string', t => t.true(isEmpty('\n\n\t')));

test('Only tabs, newlines are empty', t => t.false(isEmpty('a')));

test('Non whitespace is not empty', t => t.false(isEmpty('a')));