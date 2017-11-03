---
title: escapeRegex
---

## escapeRegex(str)

Escapes regex special characters `- [ ] / { } ( ) * + ? . \ ^ $ |`

### Arguments
* `str` *(string)*: The string to escape

### Returns
*(string)*: Returns string with escaped regex characters


### Example
```js
escapeRegex('my_var')
// => 'myVar'

escapeRegex('my var')
// => 'myVar'
```
