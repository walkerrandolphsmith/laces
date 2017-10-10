import test from 'ava';
import sut from './index';

test('Reverses characters', t => t.is(sut('Hello World'), 'dlroW olleH'));

test('Palindromes', t => t.is(sut('racecar'), 'racecar'));