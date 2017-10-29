---
title: chompRight
---

## chompRight(str, [pattern=''])

Removes the `pattern` from the right side of `str` 

### Arguments
* `str` *(string)*: The string to query
* `pattern` *(string)*: string pattern to remove

### Returns
*(string)*: Returns string with the removed pattern


### Example
```js
chompRight('my string')
// => 'my string'

chompRight('my string', 'my')
// => 'my string'

chompRight('my string', 'string')
// => 'my '
```
