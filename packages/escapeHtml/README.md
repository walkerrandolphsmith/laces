---
title: escapeHtml
---

## escapeHtml(str)

Escapes HTML special characters `< > ' "`

### Arguments
* `str` *(string)*: The string to escape

### Returns
*(string)*: Returns string with escaped HTML characters


### Example
```js
escapeHtml('<p>my string</p>')
// => '&lt;p&gt;my string&lt;/p&gt;'

escapeHtml('my string')
// => 'my string'
```
