const test = require('ava');
const sut = require('./../../packages/toCamelCase').default;

test('Replace whitespace', t => t.is(sut('my other var'), 'myOtherVar'));
