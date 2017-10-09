import test from 'ava';
import sut from './index';

test('One line', t => t.deepEqual(sut('name'), ['name']));

test('Two lines', t => t.deepEqual(sut('first line\nsecond line'), ['first line', 'second line']));

test('With carriage returns', t => t.deepEqual(sut('first line\r\nsecond line'), ['first line', 'second line']));