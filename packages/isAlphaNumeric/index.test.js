import test from 'ava';
import sut from './index';

test('Only alphas hits', t => t.true(sut('name')));

test('Only numerics hits', t => t.true(sut('1111111')));

test('Mixed alphas and numerics hits', t => t.true(sut('1asd111111')));

test('Non alpha-numeric chars misses', t => t.false(sut('555-5555')));