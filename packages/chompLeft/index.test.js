import test from 'ava';
import sut from './index';

test('No chomping', t => t.deepEqual(sut('foobar'), 'foobar'));

test('No matches', t => t.deepEqual(sut('foobar', 'bar'), 'foobar'));

test('Chomp only', t => t.deepEqual(sut('foobar', 'foo'), 'bar'));

test('Chomp first occurrence', t => t.deepEqual(sut('foo-foo-bar', 'foo'), '-foo-bar'));