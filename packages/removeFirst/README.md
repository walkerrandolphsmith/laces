---
title: removeFirst
---

## removeFirst(str, [pattern=''])

Replace first occurrence of the pattern with the empty string.


### Arguments
* `str` *(string)*: The string to remove the pattern from.
* `pattern` *(string)*: The pattern to remove

### Returns
*(string)*: Returns a string that does not contain the first occurrence of the pattern


### Example
```js
removeFirst('AABAAB')
// => 'AABAAB'

remove('AABAAB', 'B')
// => 'AAAAB'
```
