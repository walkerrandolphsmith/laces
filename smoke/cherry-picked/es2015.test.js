import test from 'ava';
import sut from './../../packages/toCamelCase';

test('Replace whitespace', t => t.is(sut('my other var'), 'myOtherVar'));
