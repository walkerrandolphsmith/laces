import test from 'ava';
import sut from './index';

test('No Latin chars', t => t.is(sut('name'), 'name'));

test('Latin chars', t => t.is(sut('crème brûlée'), 'creme brulee'));
