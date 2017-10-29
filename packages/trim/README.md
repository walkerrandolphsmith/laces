---
title: trim
---

## trim(str, [pattern=' '])

Remove string `pattern` from beginning and end of string 


### Arguments
* `str` *(string)*: string to trim
* `pattern` *(string)*: string to remove from str

### Returns
*(string)*: Returns a string without the `pattern` at beginning and end


### Example
```js
trim('my string')
// => 'my string'

trim(' my string ')
// => 'my string'

trim('__my_string__', '_')
// => 'my_string'
```
