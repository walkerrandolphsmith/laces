import test from 'ava';
import toKebabCase from './index';

test('Whitespace replaced with slug', t => t.true(toKebabCase("github repo") === 'github-repo'))

test('from camelCase', t => t.true(toKebabCase("myGithubRepo") === 'my-github-repo'));

test('from snakeCase', t => t.true(toKebabCase("my_github_repo") === 'my-github-repo'));

test('spaceless strings not effected', t => t.true(toKebabCase("github") === 'github'));