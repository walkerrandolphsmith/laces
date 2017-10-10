import test from 'ava';
import sut from './index';

test('camel-cased string unchanged', t => t.is(sut('myVar'), 'myVar'));

test('from snakecase', t => t.is(sut('my_var'), 'myVar'));

test('from snakecase', t => t.is(sut('my_other_var'), 'myOtherVar'));

test('from kebab case', t => t.is(sut('my-other-var'), 'myOtherVar'));

test('Replace whitespace', t => t.is(sut('my other var'), 'myOtherVar'));