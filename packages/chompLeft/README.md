---
title: chompLeft
---

## chompLeft(str, [pattern=''])

Removes the `pattern` from the left side of `str` 

### Arguments
* `str` *(string)*: The string to query
* `pattern` *(string)*: string pattern to remove

### Returns
*(string)*: Returns string with the removed pattern


### Example
```js
chompLeft('my string')
// => 'my string'

chompLeft('my string', 'my')
// => ' string'

chompLeft('my string', 'string')
// => 'my string'
```
