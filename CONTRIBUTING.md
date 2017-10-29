# Contributing
[![Build Status][ci-badge]][ci]
[![GitHub issues][issues-badge]][issues]
[![Stories in Ready][waffle-badge]][waffle]

First Time? Get up a running:
```
git clone git@github.com:quillio/stringy.git
cd ./stringy
npm i -g lerna
lerna boostrap
```

## Working on a module
This repository is divided into multiple scoped npm packages. That means
that each directory under the `packages` directory is an independent module
that:
1. Is published as its own module on NPM
2. Should never import any part of a sibling module by file path
3. Never be published independently

When working on one of the modules make it your current directory.
From the modules directory we can run commands specifically for that module like:
1. Adding new npm dependencies with `yarn add <new-package>`
 
### Commands

Run the specs
`npm t`


[ci]: https://travis-ci.org/Quillio/stringy
[ci-badge]: https://travis-ci.org/Quillio/stringy.svg?branch=master

[issues]: https://github.com/Quillio/stringy/issues
[issues-badge]: https://img.shields.io/github/issues/Quillio/stringy.svg

[waffle]: http://waffle.io/Quillio/stringy
[waffle-badge]: https://img.shields.io/waffle/label/Quillio/stringy.svg
