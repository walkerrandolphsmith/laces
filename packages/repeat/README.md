---
title: repeat
---

## repeat(str, [amount=0])

Concatenates the string together `amount` number of times. 


### Arguments
* `str` *(string)*: The string to repeat.
* `amount` *(int)*: Number of concatenations to perform

### Returns
*(string)*: Returns a string that has been concatenated with itself n times


### Example
```js
repeat('my string')
// => ''

repeat('my string', 0)
// => ''

repeat('my string', 1)
// => 'my string'

repeat('my string', 2)
// => 'my stringmy string'
```
