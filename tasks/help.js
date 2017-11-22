const gulp = require('gulp');
const packageJson = require('./../package.json');
const docsPackageJson = require('./../docs/package.json');


const descriptions = {
    "create": "Scaffold a new npm package",
    "link": "npm link inter-dependent packages",
    "clean": "",
    "nuke": "Remove generated files in each package",
    "build": "Generate artifacts for each package",
    "rebuild": "Clean and build",
    "lint": "Determine if style guides are met",
    "test": "Determine if unit tests pass",
    "report": "Generate local code coverage reports",
    "coverage": "Generate code coverage reports in CI",
    "bundlesize": "Determine if bundlesize is small enough",
    "start": "Run the doc site locally",
    "deploy:docs": "Deploy the doc site",
    "postinstall": "links packages after running npm install"
};

const groups = {
    "build": [
        "link",
        "clean",
        "build",
        "rebuild"
    ],
    "create": [
        "create"
    ],
    "test": [
        "lint",
        "test",
        "report",
        "coverage",
        "bundlesize"
    ],
    "docs": [
        "start",
        "deploy:docs"
    ],
};

gulp.task('help', () => {
    const scripts = {
        ...packageJson.scripts,
        docs: {
            ...docsPackageJson.scripts
        }
    };

    Object.keys(groups).forEach((key, i) => {
        const group = groups[key];
        console.log(`${++i} ${key}:`);
        group.forEach(script => {
            const description = descriptions[script];
            console.log(`  * ${script}: ${description}`);
        })
    });
});