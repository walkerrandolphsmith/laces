---
title: takeWhile
---

## takeWhile(str, [predicate=(char) => true])

Create a string that only includes characters that match the `predicate`
The `predicate` is a function applied to each character
 and returns a truthy value if the character should be included and a falesy value otherwise.  


### Arguments
* `str` *(string)*: The string to truncate
* `predicate` *(fn)*: The predicate function

### Returns
*(string)*: Returns a truncated string 


### Example
```js
takeWhile('my string')
// => 'my string'

takeLast('my string', (char) => char !== ' ')
// => 'mystring'
```
