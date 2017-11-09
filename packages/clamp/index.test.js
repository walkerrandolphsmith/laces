import test from 'ava';
import sut from './index';

test('String does not need clamping', t => t.is(sut('name', 100), 'name'));

test('Clamp string', t => t.is(sut('name', 2), 'na...'));

test('Apply custom sut pattern', t => t.is(sut('name', 2, ' (...)'), 'na (...)'));
