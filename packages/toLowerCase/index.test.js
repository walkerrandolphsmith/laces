import test from 'ava';
import sut from './index';

test('All caps', t => t.true(sut('MYVAR') === 'myvar'));