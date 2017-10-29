---
title: isBetween
---

## isBetween(str, [leftPattern=''], [rightPattern=''])

Determines if a string is surround by `leftPattern` and `rightPattern`


### Arguments
* `str` *(string)*: The string to query

### Returns
*(boolean)*: Returns whether the string is surrounded by specified patterns


### Example
```js
isBetween('<h2>my string</h2>')
// => true

isBetween('<h2>my string</h2>', '<h2>')
// => true

isBetween('<h2>my string</h2>', '<h2>', '</h2>')
// => true

isBetween('<h2>my string</h2>', '<p>')
// => false

isBetween('<h2>my string</h2>', '<p>', '</p>')
// => false
```
