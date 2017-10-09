import test from 'ava';
import sut from './index';

test('Whitespace replaced with slug', t => t.true(sut("github repo") === 'github-repo'))

test('from camelCase', t => t.true(sut("myGithubRepo") === 'my-github-repo'));

test('from snakeCase', t => t.true(sut("my_github_repo") === 'my-github-repo'));

test('spaceless strings not effected', t => t.true(sut("github") === 'github'));