import test from 'ava';
import sut from './index';

test('Strings that end with pattern hit', t => t.true(sut('theend', 'end')));

test('Strings doesn\'t end with pattern misses', t => t.false(sut('theend', 'start')));
