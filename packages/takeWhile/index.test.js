import test from 'ava';
import sut from './index';

test('Return original when no predicate is provided', t => t.is(sut('name'), 'name'));

test('Return chars such that the predicate is met', t => t.is(sut('name', c => c !== 'a'), 'nme'));

test('invalid predicate fns are ignored', (t) => {
  t.is(sut('name', 'NOT A FUNCTION'), 'name');
  t.is(sut('name', []), 'name');
  t.is(sut('name', true), 'name');
});
