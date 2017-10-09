import test from 'ava';
import latinise from './index';

test('No Latin chars', t => t.true(latinise('name') === 'name'));

test('Latin chars', t => t.true(latinise('crème brûlée') === 'creme brulee'));