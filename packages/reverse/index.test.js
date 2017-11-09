import test from 'ava';
import sut from './index';

test('Reverses characters', t => t.is(sut('Hello World'), 'dlroW olleH'));

test('Handles internal character encoding', t => t.is(sut('foo 𝌆 bar'), 'rab 𝌆 oof'));

test('Handles internal character encoding', t => t.is(sut('mañana mañana'), 'anañam anañam'));

test('Palindromes', t => t.is(sut('racecar'), 'racecar'));
