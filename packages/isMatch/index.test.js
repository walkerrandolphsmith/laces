import test from 'ava';
import sut from './index';

test('match', t => t.true(sut('password', 'password')));

test('mismatch', t => t.false(sut('password', 'incorrectpassword')));
