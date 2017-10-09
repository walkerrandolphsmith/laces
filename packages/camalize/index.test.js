import test from 'ava';
import camalize from './index';

test('camel-cased string unchanged', t => t.true(camalize('myVar') === 'myVar'));

test('Replace underscores', t => t.true(camalize('my_var') === 'myVar'));

test('Replace multiple underscores', t => t.true(camalize('my_other_var') === 'myOtherVar'));

test('Replace multiple hyphens', t => t.true(camalize('my-other-var') === 'myOtherVar'));