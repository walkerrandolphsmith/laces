import test from 'ava';
import sut from './index';

test('Kill white spaces', t => t.true(sut("\nfirst and \t\tlast") === "firstandlast"));

test('Don\'t muck with strings without white space', t => t.true(sut("name") === "name"));