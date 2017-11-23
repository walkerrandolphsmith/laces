import test from 'ava';
import laces from './../../../packages/laces/dist';

const sut = laces.toCamelCase;

test('Replace whitespace', t => t.is(sut('my other var'), 'myOtherVar'));
