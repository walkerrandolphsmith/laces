import test from 'ava';
import capitalize from './index';

test('capitalize', t => {
    t.true(capitalize("name") === "Name");
});