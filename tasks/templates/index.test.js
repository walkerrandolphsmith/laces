import test from 'ava';
import sut from './index';

test('Identity', t => t.is(sut('x'), 'x'));
