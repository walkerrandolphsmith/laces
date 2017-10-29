---
title: padLeft
---

## padLeft(str, [length=0], [pattern=''])

Prepend the `pattern` to `str` until it's length is equal to the provided `length'
If the addition of pattern causes `str` to exceed the specified length then only apply a subset of the `pattern`.


### Arguments
* `str` *(string)*: The string to prepend the pattern.
* `length` *(int)*: limit of string length
* `pattern` *(string)*: The pattern to prepend

### Returns
*(string)*: Returns a string that is padded with the pattern


### Example
```js
padLeft('my string')
// => 'my string'

padLeft('my string', 11)
// => '  my string'

padLeft('my string', 11, '.')
// => '..my string'

padLeft('my string', 11, '.+.')
// => '.+my string'

padLeft('my string', 12, '.+.')
// => '.+.my string'
```
