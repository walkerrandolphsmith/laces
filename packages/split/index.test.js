import test from 'ava';
import sut from './index';

test('Single word', t => t.deepEqual(sut('The'), ['The']));

test('Sentence', t => t.deepEqual(sut('The sentence is over.'), [
    'The', 'sentence', 'is', 'over.'
]));

test('Custom delimiter', t => t.deepEqual(sut('AABAABABC', 'B'), ['AA', 'AA', 'A', 'C']));
