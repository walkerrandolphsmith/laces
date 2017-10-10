import test from 'ava';
import sut from './index';

test('First char', t => t.is(sut('name'), 'n'));

test('First n char', t => t.is(sut('name', 2), 'na'));