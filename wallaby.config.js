module.exports = function(wallaby) {
    const packageConfig = require('./package.json');
    const specFilePattern = 'packages/**/*.test.js';
    const srcFilePattern = 'packages/**/*.js';
    const babelProcessor = wallaby.compilers.babel(packageConfig.babel);

    return {
        testFramework: 'ava',
        env: {
            type: 'node',
            runner: 'node'
        },
        debug: true,
        files: [
            srcFilePattern,
            `!${specFilePattern}`
        ],
        tests: [
            specFilePattern
        ],
        compilers: {
            '**/*.js': babelProcessor
        }
    };
};