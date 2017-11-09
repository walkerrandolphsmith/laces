import test from 'ava';
import sut from './index';

test('word', t => t.is(sut('name'), 'Name'));

test('empty', t => t.is(sut(''), ''));
