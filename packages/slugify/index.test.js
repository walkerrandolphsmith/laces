import test from 'ava';
import slugify from './index';

test('Whitespace replaced with slug', t => t.true(slugify("github repo") === 'github-repo'));

test('Latin characters removed', t => t.true(slugify("crème brûlée") === 'creme-brulee'));

test('space-less strings not effected', t => t.true(slugify("github") === 'github'));