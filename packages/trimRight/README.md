---
title: trimRight
---

## trimRight(str, [pattern=' '])

Remove string `pattern` from end of string 


### Arguments
* `str` *(string)*: string to trim
* `pattern` *(string)*: string to remove from str

### Returns
*(string)*: Returns a string without the `pattern` at the end


### Example
```js
trimRight('my string')
// => 'my string'

trimRight(' my string ')
// => ' my string'

trimRight('__my_string__', '_')
// => '__my_string'
```
