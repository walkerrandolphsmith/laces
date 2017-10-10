import test from 'ava';
import sut from './index';

test('Trim left', t => t.is(sut(' name'), 'name'));

test('No trim', t => t.is(sut('name'), 'name'));

test('Trim custom pattern', t => t.is(sut('**name', "*"), 'name'));