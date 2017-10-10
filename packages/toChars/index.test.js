import test from 'ava';
import sut from './index';

test('Convert word to list of chars', t => t.deepEqual(sut('name'), ['n', 'a', 'm', 'e']));