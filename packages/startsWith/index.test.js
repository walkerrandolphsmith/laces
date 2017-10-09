import test from 'ava';
import sut from './index';

test('Strings that begin with pattern hit', t => t.true(sut('startsend', 'start')));

test('Strings that don\'t begin with pattern misses', t => t.false(sut('theend', 'start')));