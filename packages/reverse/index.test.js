import test from 'ava';
import sut from './index';

test('Reverses characters', t => t.true(sut('Hello World') === 'dlroW olleH'));

test('Palindromes', t => t.true(sut('racecar') === 'racecar'));