import test from 'ava';
import sut from './index';

test('Single replacement', t => {
    t.true(sut('{0}', 'zero') === 'zero')
});

test('Single replacement padded left', t => {
    t.true(sut('PAD{0}', 'zero') === 'PADzero')
});

test('Single replacement padded right', t => {
    t.true(sut('{0}PAD', 'zero') === 'zeroPAD')
});

test('Single replacement padded right with spaces', t => {
    t.true(sut('{0}   ', 'zero') === 'zero   ')
});

test('Two replacements', t => {
    t.true(sut('{0}{1}', 'zero', 'one') === 'zeroone')
});

test('text between replacements', t => {
    t.true(sut('{0} between {1}', 'zero', 'one') === 'zero between one')
});

test('text surround two replacements', t => {
    t.true(sut('start {0} {1} end', 'zero', 'one') === 'start zero one end')
});

test('Empty brackets replace the 0th term', t => {
    t.true(sut('start {}', 'zero') === 'start zero')
});