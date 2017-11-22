# Laces

<div style="display:flex;align-items:center;padding: 10px 0;">
      <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 125"
                fill="black"
                style="width: 75px; height: 75px; marginTop: 10px;"
            >
                    <path
                        d="M47.832,44.766c-1.437-0.761-3.217-0.212-3.977,1.224l-1.289,2.435c-3.593-2.528-5.71-5.491-7.922-8.623  c-2.484-3.517-5.054-7.152-9.744-10.5c-3.761-2.684-7.74-4.102-11.51-4.102c-3.739,0-7.178,1.384-9.684,3.897  c-2.4,2.411-3.718,5.6-3.706,8.983c0.033,9.913,9.689,15.916,26.65,16.794c-1.416,0.744-2.727,1.622-3.875,2.649  c-3.511,3.137-5.433,7.357-5.555,12.202c-0.042,1.623,1.241,2.974,2.866,3.017c0.026,0,0.05,0,0.076,0  c1.59,0,2.899-1.269,2.939-2.867c0.082-3.227,1.292-5.906,3.594-7.965c2.626-2.347,6.614-3.724,10.735-3.786l-0.195,0.369  c-0.76,1.435-0.212,3.216,1.224,3.976c0.438,0.231,0.909,0.344,1.373,0.344c1.056,0,2.076-0.569,2.603-1.567l6.62-12.504  C49.815,47.307,49.268,45.525,47.832,44.766z M5.884,38.06c-0.005-1.808,0.701-3.516,1.99-4.809  c1.394-1.398,3.353-2.167,5.516-2.167c2.537,0,5.335,1.038,8.091,3.006c3.88,2.768,6.055,5.848,8.358,9.105  c1.377,1.95,2.78,3.936,4.551,5.858c-1.116,0.04-2.216,0.062-3.298,0.062C25.187,49.115,5.919,48.317,5.884,38.06z"/><path d="M91.722,30.088c-1.719-0.629-3.427-0.945-5.08-0.945c-7.079,0-11.883,5.553-16.527,10.924  c-4.061,4.691-7.918,9.138-13.022,10.165l0.789-1.49c0.76-1.435,0.213-3.216-1.224-3.976c-1.436-0.761-3.218-0.212-3.977,1.224  l-6.619,12.504c-0.761,1.435-0.213,3.216,1.224,3.976c0.438,0.231,0.909,0.344,1.373,0.344c1.056,0,2.076-0.569,2.603-1.567  l1.124-2.125c0.223,0.233,0.479,0.44,0.782,0.595c0.247,0.125,6.067,3.188,6.813,12.381c0.125,1.54,1.412,2.705,2.929,2.705  c0.079,0,0.159-0.003,0.24-0.011c1.62-0.131,2.827-1.55,2.694-3.169c-0.602-7.436-3.835-11.984-6.487-14.526  c3.855,0.695,9.604,1.491,15.758,1.491c0.001,0,0,0,0.001,0c5.88,0,10.717-0.755,14.373-2.243  c6.597-2.689,10.623-8.265,10.508-14.553C99.898,36.4,96.727,31.915,91.722,30.088z M87.269,50.893  c-2.948,1.2-7.036,1.81-12.153,1.81c-2.927,0-5.928-0.207-8.757-0.525c3.105-2.365,5.74-5.41,8.205-8.262  c4.126-4.77,7.689-8.888,12.078-8.888c0.976,0,1.977,0.19,3.061,0.586c2.709,0.989,4.358,3.338,4.411,6.284  C94.169,44.876,92.399,48.802,87.269,50.893z"
                    />
            </svg>
    <span style="padding-left: 15px;">
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

