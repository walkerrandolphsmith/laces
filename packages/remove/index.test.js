import test from 'ava';
import sut from './index';

test('No removal', t => t.deepEqual(sut('The'), 'The'));

test('Remove all occurrences', t => t.deepEqual(sut('AABAABABC', 'B'), 'AAAAAC'));
