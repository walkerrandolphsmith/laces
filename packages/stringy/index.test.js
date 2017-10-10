import test from 'ava';
import sut from './index';

test('Contains members', t => t.is(typeof sut.camalize, 'function'));