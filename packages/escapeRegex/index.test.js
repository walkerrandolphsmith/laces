import test from 'ava';
import sut from './index';

test('String with no special characters is unchanged', t => t.is(sut('myVar'), 'myVar'));

test('Escape special regex characters', (t) => {
  [
    '-',
    '[',
    ']',
    '/',
    '{',
    '}',
    '(',
    ')',
    '*',
    '+',
    '?',
    '.',
    '\\',
    '^',
    '$',
    '|',
  ].forEach((specialCharacter) => {
    t.is(sut(`pre${specialCharacter}post`), `pre\\${specialCharacter}post`);
  });
});
