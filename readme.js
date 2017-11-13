const { lstatSync, readdirSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');

const buildReadMe = (name) => `# @quillio/${name}  

<div class="social-buttons">
    <a href="https://twitter.com/Quillio_io" class="btn twitter-follow-btn">
        <i></i>
        <span class="label">Follow @quillio</span>
    </a>
    <a href="https://github.com/quillio" class="btn gh-follow-btn">
        <i></i>
        <span class="label">Follow @quillio</span>
    </a>
    <a href="https://github.com/quillio/stringy" class="btn gh-follow-btn">
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

Using npm:
\`\`\`sh
// Install full build
$ npm install --save @quillio/stringy

// Cherry-pick only what you need
$ npm install --save @quillio/stringy-${name}
\`\`\`

Use in Node.js: 
\`\`\`js
// Load the full build
const stringy = require('@quillio/stringy')

// Cherry-pick methods for smaller bundles
const ${name} = require('@quillio/stringy-${name}')
\`\`\`

For additional documentation please use the 
[documentation site](https://quillio.io/stringy)

To contribute please read the
[contributing guide](https://github.com/quillio/stringy/blob/master/CONTRIBUTING.md) and
[code of conduct](https://github.com/quillio/stringy/blob/master/CODE_OF_CONDUCT.md).


[ci]: https://travis-ci.org/Quillio/stringy
[ci-badge]: https://travis-ci.org/Quillio/stringy.svg?branch=master

[waffle]: http://waffle.io/Quillio/stringy
[waffle-badge]: https://img.shields.io/waffle/label/Quillio/stringy.svg

[npm]: https://www.npmjs.org/package/@quillio/stringy-${name}
[npm-badge]: https://img.shields.io/npm/v/@quillio/stringy-${name}.svg

[npm-deps]: https://david-dm.org/quillio/stringy
[npm-deps-badge]: https://david-dm.org/quillio/stringy/status.svg

[npm-dev-deps]: https://david-dm.org/quillio/stringy?type=dev
[npm-dev-deps-badge]: https://david-dm.org/quillio/stringy/dev-status.svg

[code-cov]: https://coveralls.io/github/Quillio/stringy
[code-cov-badge]: https://coveralls.io/repos/github/Quillio/stringy/badge.svg

[code-style]: https://github.com/airbnb/javascript
[code-style-badge]: https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg

[license]: https://opensource.org/licenses/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-brightgreen.svg
`;

const packagesPath = resolve(__dirname, 'packages');

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = source => readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(path => path.split('/').pop());

const packageNames = getDirectories(packagesPath);

packageNames.forEach(packageName => {
    const readMeContents = buildReadMe(packageName);
    writeFileSync(`${packagesPath}/${packageName}/README.md`, readMeContents)
});
