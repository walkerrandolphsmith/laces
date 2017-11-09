import test from 'ava';
import sut from './index';

test('All caps', t => t.is(sut('myVar'), 'MYVAR'));
