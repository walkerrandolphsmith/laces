---
title: isBlank
---

## isBetween(str)

Determines if a string only contains whitespace characters


### Arguments
* `str` *(string)*: The string to query

### Returns
*(boolean)*: Returns whether the string only contains whitespace characters


### Example
```js
isBlank('')
// => true

isBlank(' ')
// => true

isBlank('\n')
// => true

isBlank('my string')
// => false
```
