---
title: padRight
---

## padRight(str, [length=0], [pattern=''])

Append the `pattern` to `str` until it's length is equal to the provided `length'
If the addition of pattern causes `str` to exceed the specified length then only apply a subset of the `pattern`.


### Arguments
* `str` *(string)*: The string to append the pattern.
* `length` *(int)*: limit of string length
* `pattern` *(string)*: The pattern to append

### Returns
*(string)*: Returns a string that is padded with the pattern


### Example
```js
padRight('my string')
// => 'my string'

padRight('my string', 11)
// => 'my string  '

padRight('my string', 11, '.')
// => 'my string..'

padRight('my string', 11, '.+.')
// => 'my string.+'

padRight('my string', 12, '.+.')
// => 'my string.+.'
```
