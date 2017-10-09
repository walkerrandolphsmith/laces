import test from 'ava';
import sut from './index';

test('camel-cased string unchanged', t => t.true(sut('myVar') === 'myVar'));

test('from snakecase', t => t.true(sut('my_var') === 'myVar'));

test('from snakecase', t => t.true(sut('my_other_var') === 'myOtherVar'));

test('from kebab case', t => t.true(sut('my-other-var') === 'myOtherVar'));

test('Replace whitespace', t => t.true(sut('my other var') === 'myOtherVar'));