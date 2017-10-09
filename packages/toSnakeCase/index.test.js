import test from 'ava';
import sut from './index';

test('snake case string unchanged', t => t.true(sut('my_string') === 'my_string'));

test('from kebab case', t => t.true(sut('my-other-var') === 'my_other_var'));

test('from camel case', t => t.true(sut('myOtherVar') === 'my_other_var'));

test('Replace whitespace', t => t.true(sut('my other var') === 'my_other_var'));