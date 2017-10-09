import test from 'ava';
import toCamelCase from './index';

test('camel-cased string unchanged', t => t.true(toCamelCase('myVar') === 'myVar'));

test('from snakecase', t => t.true(toCamelCase('my_var') === 'myVar'));

test('from snakecase', t => t.true(toCamelCase('my_other_var') === 'myOtherVar'));

test('from kebab case', t => t.true(toCamelCase('my-other-var') === 'myOtherVar'));

test('Replace whitespace', t => t.true(toCamelCase('my other var') === 'myOtherVar'));