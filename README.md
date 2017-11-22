# Laces

<div style="display:flex;align-items:center;padding-bottom: 20px;">
    <img
        alt="Logo"
        width="40px"
        src="https://cdn.rawgit.com/walkerrandolphsmith/laces/83820c97/docs/static/logo.png"
    />
    <span style="padding-left: 5px;">
        Laces is a modern JavaScript string utility library providing modularity and ease of use.
    </span>
</div>




<div class="social-buttons">
    <a href="https://github.com/walkerrandolphsmith/laces" class="btn gh-follow-btn">
        <i></i>
        <span class="label">Follow @laces</span>
    </a>
    <a href="https://github.com/walkerrandolphsmith/laces" class="btn gh-follow-btn">
        <i></i>
        <span class="label">Star</span>
    </a>
</div>
<br>

[![License: MIT][license-badge]][license]
[![npm][npm-badge]][npm]
[![dependencies Status][npm-deps-badge]][npm-deps]
[![devDependencies Status][npm-dev-deps-badge]][npm-dev-deps]
[![Build Status][ci-badge]][ci]
[![Code Coverage][code-cov-badge]][code-cov]
[![Code Style][code-style-badge]][code-style]
[![Stories in Ready][waffle-badge]][waffle]

### Installation  

Using npm:
```sh
// Install full build
$ npm install --save @laces/laces

// Cherry-pick only what you need
$ npm install --save @laces/toSnakeCase
```

Use in Node.js: 
```js
// Load the full build
const laces = require('@laces/laces')

// Cherry-pick methods for smaller bundles
const toSnakeCase = require('@laces/toSnakeCase')
```

To contribute please read the
[contributing guide](https://github.com/walkerrandolphsmith/laces/blob/master/CONTRIBUTING.md) and
[code of conduct](https://github.com/walkerrandolphsmith/laces/blob/master/CODE_OF_CONDUCT.md)

[ci]: https://travis-ci.org/Quillio/stringy
[ci-badge]: https://travis-ci.org/walkerrandolphsmith/laces.svg?branch=master

[waffle]: http://waffle.io/walkerrandolphsmith/laces
[waffle-badge]: https://img.shields.io/waffle/label/walkerrandolphsmith/laces.svg

[npm]: https://www.npmjs.org/package/@laces/laces
[npm-badge]: https://img.shields.io/npm/v/@laces/laces.svg

[npm-deps]: https://david-dm.org/walkerrandolphsmith/laces
[npm-deps-badge]: https://david-dm.org/walkerrandolphsmith/laces/status.svg

[npm-dev-deps]: https://david-dm.org/walkerrandolphsmith/laces?type=dev
[npm-dev-deps-badge]: https://david-dm.org/walkerrandolphsmith/laces/dev-status.svg

[code-cov]: https://coveralls.io/github/walkerrandolphsmith/laces?branch=master
[code-cov-badge]: https://coveralls.io/repos/github/walkerrandolphsmith/laces/badge.svg?branch=master

[code-style]: https://github.com/airbnb/javascript
[code-style-badge]: https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg

[license]: https://opensource.org/licenses/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-brightgreen.svg

