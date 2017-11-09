import test from 'ava';
import sut from './index';

test('camel-cased string unchanged', t => t.is(sut('myVar'), 'myVar'));

test('Replace underscores', t => t.is(sut('my_var'), 'myVar'));

test('Replace multiple underscores', t => t.is(sut('my_other_var'), 'myOtherVar'));

test('Replace multiple hyphens', t => t.is(sut('my-other-var'), 'myOtherVar'));
