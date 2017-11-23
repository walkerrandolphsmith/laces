const test = require('ava');
const laces = require('./../../../packages/laces/dist');
const sut = laces.toCamelCase;

test('Replace whitespace', t => {


    t.is(sut('my other var'), 'myOtherVar')
});
