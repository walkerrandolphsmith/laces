import test from 'ava';
import sut from './index';

test('Whitespace replaced with slug', t => t.true(sut("github repo") === 'github-repo'));

test('Latin characters removed', t => t.true(sut("crème brûlée") === 'creme-brulee'));

test('space-less strings not effected', t => t.true(sut("github") === 'github'));