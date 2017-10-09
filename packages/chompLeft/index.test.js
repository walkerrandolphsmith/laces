import test from 'ava';
import chompLeft from './index';

test('No chomping', t => t.deepEqual(chompLeft('foobar'), 'foobar'));

test('No matches', t => t.deepEqual(chompLeft('foobar', 'bar'), 'foobar'));

test('Chomp only', t => t.deepEqual(chompLeft('foobar', 'foo'), 'bar'));

test('Chomp first occurrence', t => t.deepEqual(chompLeft('foo-foo-bar', 'foo'), '-foo-bar'));