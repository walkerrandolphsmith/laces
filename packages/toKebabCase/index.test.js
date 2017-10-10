import test from 'ava';
import sut from './index';

test('Whitespace replaced with slug', t => t.is(sut("github repo"), 'github-repo'))

test('from camelCase', t => t.is(sut("myGithubRepo"), 'my-github-repo'));

test('from snakeCase', t => t.is(sut("my_github_repo"), 'my-github-repo'));

test('spaceless strings not effected', t => t.is(sut("github"), 'github'));