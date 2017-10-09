import test from 'ava';
import sut from './index';

test('No chomping', t => t.deepEqual(sut('foobar'), 'foobar'));

test('No match, no chomp', t => t.deepEqual(sut('foobar', 'foo'), 'foobar'));

test('Chomp only match', t => t.deepEqual(sut('foobar', 'foo'), 'foobar'));

test('Chomp last occurrence', t => t.deepEqual(sut('foobar-bar', 'bar'), 'foobar-'));