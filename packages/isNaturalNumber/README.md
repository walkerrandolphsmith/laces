---
title: isNaturalNumber
---

## isNaturalNumber(str)

Determines if a string is a valid natural number


### Arguments
* `str` *(string)*: The string to query

### Returns
*(boolean)*: Returns whether the string is a valid natural number


### Example
```js
isNaturalNumber('1')
// => true

isNaturalNumber('-1')
// => false

isNaturalNumber('1.5')
// => false

isNaturalNumber('my string')
// => false
```
