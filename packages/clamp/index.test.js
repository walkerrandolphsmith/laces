import test from 'ava';
import clamp from './index';

test('String does not need clamping', t => t.true(clamp("name", 100) === "name"));

test('Clamp string', t => t.true(clamp("name", 2) === "na..."));

test('Apply custom clamp pattern', t => t.true(clamp("name", 2, ' (...)') === "na (...)"));