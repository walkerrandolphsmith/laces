import test from 'ava';
import sut from './index';

test('No Latin chars', t => t.true(sut('name') === 'name'));

test('Latin chars', t => t.true(sut('crème brûlée') === 'creme brulee'));