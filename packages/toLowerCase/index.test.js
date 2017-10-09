import test from 'ava';
import toLowerCase from './index';

test('All caps', t => t.true(toLowerCase('MYVAR') === 'myvar'));