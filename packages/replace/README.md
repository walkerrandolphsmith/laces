---
title: replace
---

## replace(str, pattern='', replaceWith='')

Replace parts of the string that match the `pattern` with `replaceWith` pattern. 


### Arguments
* `str` *(string)*: The string to replace one pattern with another.
* `pattern` *(string)*: The string to remove from str
* `replaceWith` *(string|fn)*: A string or function that returns a string that will be added to str

### Returns
*(string)*: Returns a string that has `replaceWith` pattern in place of all occurrences of `pattern` 


### Example
```js
replace('my string')
// => 'my string'

replace('my string', 'string', 'replacement')
// => 'my replacement'

const capitalize = (match) => match[0].toUpperCase() + match.slice(1, slice.length)
replace('my string', 'string', capitalize)
// => 'my String'
```
