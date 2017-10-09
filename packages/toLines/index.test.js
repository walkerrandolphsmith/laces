import test from 'ava';
import toLines from './index';

test('One line', t => t.deepEqual(toLines('name'), ['name']));

test('Two lines', t => t.deepEqual(toLines('first line\nsecond line'), ['first line', 'second line']));

test('With carriage returns', t => t.deepEqual(toLines('first line\r\nsecond line'), ['first line', 'second line']));