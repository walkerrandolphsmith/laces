import test from 'ava';
import sut from './index';

test('First char', t => t.is(sut('name', 0), 'n'));

test('Last char', t => t.is(sut('name', 3), 'e'));

test('Middle-ish char', t => t.is(sut('first name', 5), ' '));

test('Index out of range', t => t.is(sut('name', 10000), ''));
