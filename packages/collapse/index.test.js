import test from 'ava';
import sut from './index';

test('Kill white spaces', t => t.is(sut("\nfirst and \t\tlast"), "firstandlast"));

test('Don\'t muck with strings without white space', t => t.is(sut("name"), "name"));