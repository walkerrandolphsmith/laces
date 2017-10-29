---
title: trimLeft
---

## trimLeft(str, [pattern=' '])

Remove string `pattern` from beginning of string 


### Arguments
* `str` *(string)*: string to trim
* `pattern` *(string)*: string to remove from str

### Returns
*(string)*: Returns a string without the `pattern` at the beginning


### Example
```js
trimLeft('my string')
// => 'my string'

trimLeft(' my string ')
// => 'my string '

trimLeft('__my_string__', '_')
// => 'my_string__'
```
