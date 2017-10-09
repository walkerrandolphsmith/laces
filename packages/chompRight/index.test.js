import test from 'ava';
import chompRight from './index';

test('No chomping', t => t.deepEqual(chompRight('foobar'), 'foobar'));

test('No match, no chomp', t => t.deepEqual(chompRight('foobar', 'foo'), 'foobar'));

test('Chomp only match', t => t.deepEqual(chompRight('foobar', 'foo'), 'foobar'));

test('Chomp last occurrence', t => t.deepEqual(chompRight('foobar-bar', 'bar'), 'foobar-'));