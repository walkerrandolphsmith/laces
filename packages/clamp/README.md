---
title: clamp
---

## clamp(str, [length=0], [replaceWith='...'])

Limits the `str` to length no greater than `length`.
Strings that exceed the `length` limit have `replaceWith` appended to them.


### Arguments
* `str` *(string)*: The string to clamp
* `length` *(int)*: Maximum length of `str`
* `replaceWith` *(string)*: pattern to append to strings that exceed the length

### Returns
*(string)*: Returns a string that is limited by the specified `length`.


### Example
```js
clamp('my string')
// => 'my string'

clamp('really long string', 10)
// => 'really lon...'

clamp('really long string', 10, '(...)')
// => 'really lon(...)'
```
