import test from 'ava';
import sut from './index';

test('No string', t => t.is(sut(), ''));

test('Whitespace replaced with slug', t => t.is(sut('github repo'), 'github-repo'));

test('Latin characters removed', t => t.is(sut('crème brûlée'), 'creme-brulee'));

test('space-less strings not effected', t => t.is(sut('github'), 'github'));
