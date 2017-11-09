import test from 'ava';
import sut from './index';

test('Last char', t => t.is(sut('name'), 'e'));

test('Last n char', t => t.is(sut('name', 2), 'me'));
