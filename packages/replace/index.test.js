import test from 'ava';
import sut from './index';

test('Replace with string', t => t.is(sut('Hello World', 'World', 'Passing Test'), 'Hello Passing Test'));

test('Replace with function', t => t.is(sut('Hello World', 'W', m => m.toLowerCase()), 'Hello world'));
