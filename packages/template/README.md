---
title: template
---

## template(str, ...args)

Python-style string formatting. Replace `{\d}` patterns in string with the
nth argument in `args`. 


### Arguments
* `str` *(string)*: Template string
* `args` *(Array<any>)*: Array of values inject into template string

### Returns
*(string)*: Returns a string where each template pattern is replaced with an argument. 


### Example
```js
tempalte('my {0} string', 'templated')
// => 'my templated string'

tempalte('my {0} string{1}', 'templated', '!')
// => 'my templated string!'

tempalte('{0} oh {0} a {1} string{2}', 'my', 'templated', '!')
// => 'my oh my a templated string!'
```
