---
title: isAlphaNumeric
---

## isAlphaNumeric(str)

Determines if a string contains only alpha and/or numeric characters


### Arguments
* `str` *(string)*: The string to query

### Returns
*(boolean)*: Returns whether the string only contains alpha and/or numeric characters


### Example
```js
isAlpha('phone')
// => true

isAlpha('5555555')
// => true

isAlpha('phone 5555555')
// => true

isAlpha('phone 555-5555')
// => false
```
