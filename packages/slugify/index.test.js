import test from 'ava';
import slugify from './index';

test('Whitespace replaced with slug', t => t.true(slugify("github repo") === 'github-repo'));

test('spaceless strings not effected', t => t.true(slugify("github") === 'github'));