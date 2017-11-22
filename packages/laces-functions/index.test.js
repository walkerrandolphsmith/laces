import test from 'ava';
import sut, { manipulations } from './index';

const f = 'function';

test('Contains members', t => t.is(typeof sut.camalize, f));

test('Contains manipulations', t => t.is(typeof manipulations.camalize, f));
