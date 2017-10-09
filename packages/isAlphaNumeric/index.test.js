import test from 'ava';
import isAlphaNumeric from './index';

test('Only alphas hits', t => t.true(isAlphaNumeric("name")));

test('Only numerics hits', t => t.true(isAlphaNumeric("1111111")));

test('Mixed alphas and numerics hits', t => t.true(isAlphaNumeric("1asd111111")));

test('Non alpha-numeric chars misses', t => t.false(isAlphaNumeric("555-5555")));