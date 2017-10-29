---
title: remove
---

## remove(str, [pattern=''])

Replace occurrences of the pattern with the empty string.


### Arguments
* `str` *(string)*: The string to remove the pattern from.
* `pattern` *(string)*: The pattern to remove

### Returns
*(string)*: Returns a string that does not contain the pattern


### Example
```js
remove('my string')
// => 'my string'

remove('my string', 'my')
// => 'string'
```
