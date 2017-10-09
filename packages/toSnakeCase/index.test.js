import test from 'ava';
import toSnakeCase from './index';

test('snake case string unchanged', t => t.true(toSnakeCase('my_string') === 'my_string'));

test('from kebab case', t => t.true(toSnakeCase('my-other-var') === 'my_other_var'));

test('from camel case', t => t.true(toSnakeCase('myOtherVar') === 'my_other_var'));

test('Replace whitespace', t => t.true(toSnakeCase('my other var') === 'my_other_var'));