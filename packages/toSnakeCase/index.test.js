import test from 'ava';
import sut from './index';

test('snake case string unchanged', t => t.is(sut('my_string'), 'my_string'));

test('from kebab case', t => t.is(sut('my-other-var'), 'my_other_var'));

test('from camel case', t => t.is(sut('myOtherVar'), 'my_other_var'));

test('Replace whitespace', t => t.is(sut('my other var'), 'my_other_var'));
