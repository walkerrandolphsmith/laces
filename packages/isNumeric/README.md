---
title: isNumeric
---

## isNumeric(str)

Determines if a string is a valid number


### Arguments
* `str` *(string)*: The string to query

### Returns
*(boolean)*: Returns whether the string is a valid number


### Example
```js
isNumeric('1')
// => true

isNumeric('-1')
// => true

isNumeric('1.5')
// => true

isNumeric('my string')
// => false
```
