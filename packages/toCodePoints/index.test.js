import test from 'ava';
import sut from './index';

test('single word', t => t.deepEqual(sut('😀 awesome'), [55357, 56832, 32, 97, 119, 101, 115, 111, 109, 101]));
