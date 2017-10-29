---
title: chain
---

## chain(str)

Creates a fluent interface to chain stringy operations together.
Escape the wrapper by invoking `value` and retrieve the wrapped string.

### Arguments
* `str` *(string)*: The string to chain

### Returns
*(object)*: Wrapped string


### Example
```js
chain('my sTriNg')
    .toSnakeCase()
    .toLowerCase()
    .repeat()
    .value()
// => 'my_stringmy_string'
```
