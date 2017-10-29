---
title: isReal
---

## isReal(str)

Determines if a string is a valid real number


### Arguments
* `str` *(string)*: The string to query

### Returns
*(boolean)*: Returns whether the string is a valid real number


### Example
```js
isReal('1')
// => true

isReal('-1')
// => true

isReal('1.5')
// => true

isReal('my string')
// => false
```
