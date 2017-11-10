# Contributing

## Contributor License Agreement
Coming soon. Thanks for your patience.

## Feature Requests
Submit features  requests and issues to the [issue tracker](https://github.com/quillio/stringy/issues). Please search for similar requests within the [closed issues](https://github.com/quillio/stringy/issues?q=is%3Aissue+is%3Aclosed) before submitting a new request.

## Getting Started
First Time? Get up a running:
```
git clone git@github.com:quillio/stringy.git
cd ./stringy
npm install
```
This repository is divided into multiple scoped npm packages. That means
that each directory under the `packages` directory is an independent npm package
1. Is published as its own module on NPM
2. Should never import any part of a sibling module by file path
3. Never be published independently

Add dependencies to a package by making `/packages/<package-in-progress>` your working directory and run the following command:
```npm install <new-package> --save```
 
### Coding guidelines

* **Tests**:  
Functions should be unit tested and bug fixes should include unit tests that exercise the broken functionality. Hopefully it can help drive the design of a function as well. Tests can be verified with `npm run test`
* **Comments**:  
Functions should include JSDoc-style comments.
* **Coding Style**:  
Coding style is established in the lint configuration and can be verified with `npm run lint`
