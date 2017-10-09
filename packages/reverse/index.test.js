import test from 'ava';
import reverse from './index';

test('Reverses characters', t => t.true(reverse("Hello World") === 'dlroW olleH'));

test('Palindromes', t => t.true(reverse("racecar") === 'racecar'));