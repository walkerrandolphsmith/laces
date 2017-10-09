import test from 'ava';
import sut from './index';

test('Only alphas hits', t => t.true(sut('name')));

test('Anything other than alpha char misses', t => t.false(sut('1name')));

test('No alpha chars misses', t => t.false(sut('555-5555')));