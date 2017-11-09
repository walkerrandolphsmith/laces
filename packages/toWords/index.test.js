import test from 'ava';
import sut from './index';

test('Single word', t => t.deepEqual(sut('The'), ['the']));

test('Sentence', t => t.deepEqual(sut('The sentence is over.'), [
  'the', 'sentence', 'is', 'over.',
]));

test('camelcase', t => t.deepEqual(sut('hardToReadCamel'), ['hard', 'to', 'read', 'camel']));

test('snakecase', t => t.deepEqual(sut('hardToReadSnake'), ['hard', 'to', 'read', 'snake']));

test('kebabcase', t => t.deepEqual(sut('hardToReadKebab'), ['hard', 'to', 'read', 'kebab']));

