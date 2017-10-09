import test from 'ava';
import collapse from './index';

test('Kill white spaces', t => t.true(collapse("\nfirst and \t\tlast") === "firstandlast"));

test('Don\'t muck with strings without white space', t => t.true(collapse("name") === "name"));