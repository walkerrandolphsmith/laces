---
title: isInteger
---

## isInteger(str)

Determines if a string is a valid integer


### Arguments
* `str` *(string)*: The string to query

### Returns
*(boolean)*: Returns whether the string is a valid integer


### Example
```js
isInteger('1')
// => true

isInteger('-1')
// => true

isInteger('1.5')
// => false

isInteger('my string')
// => false
```
