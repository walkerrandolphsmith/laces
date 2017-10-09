import test from 'ava';
import isAlpha from './index';

test('Only alphas hits', t => t.true(isAlpha('name')));

test('Anything other than alpha char misses', t => t.false(isAlpha('1name')));

test('No alpha chars misses', t => t.false(isAlpha('555-5555')));