import test from 'ava';
import sut from './index';

test('camel-cased string unchanged', t => t.true(sut('myVar') === 'myVar'));

test('Replace underscores', t => t.true(sut('my_var') === 'myVar'));

test('Replace multiple underscores', t => t.true(sut('my_other_var') === 'myOtherVar'));

test('Replace multiple hyphens', t => t.true(sut('my-other-var') === 'myOtherVar'));