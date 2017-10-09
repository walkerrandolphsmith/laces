import test from 'ava';
import template from './index';

test('Single replacement', t => {
    t.true(template('{0}', 'zero') === 'zero')
});

test('Single replacement padded left', t => {
    t.true(template('PAD{0}', 'zero') === 'PADzero')
});

test('Single replacement padded right', t => {
    t.true(template('{0}PAD', 'zero') === 'zeroPAD')
});

test('Single replacement padded right with spaces', t => {
    t.true(template('{0}   ', 'zero') === 'zero   ')
});

test('Two replacements', t => {
    t.true(template('{0}{1}', 'zero', 'one') === 'zeroone')
});

test('text between replacements', t => {
    t.true(template('{0} between {1}', 'zero', 'one') === 'zero between one')
});

test('text surround two replacements', t => {
    t.true(template('start {0} {1} end', 'zero', 'one') === 'start zero one end')
});

test('Empty brackets replace the 0th term', t => {
    t.true(template('start {}', 'zero') === 'start zero')
});