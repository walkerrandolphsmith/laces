import test from 'ava';
import sut from './index';

test('space case unchanged', t => t.is(sut('my other var'), 'my other var'));

test('from snake case', t => t.is(sut('my_string'), 'my string'));

test('from kebab case', t => t.is(sut('my-other-var'), 'my other var'));

test('from camel case', t => t.is(sut('myOtherVar'), 'my other var'));

test('mixed', t => t.is(sut('camelVar my other var'), 'camel var my other var'));
