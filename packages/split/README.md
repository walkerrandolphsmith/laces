---
title: split
---

## split(str, [pattern=' '])

Convert a string into an array using `pattern` as a delimiter. 


### Arguments
* `str` *(string)*: The string to split
* `pattern` *(string)*: The delimiter pattern

### Returns
*(Array<string>)*: Returns an array of strings


### Example
```js
split('my string')
// => ['my', 'string']

split('AA_BB_CC', '_')
// => ['AA', 'BB', 'CC']
```
