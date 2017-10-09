import test from 'ava';
import sut from './index';

test('word', t => t.true(sut('name') === 'Name'));

test('empty', t => t.true(sut('') === ''));