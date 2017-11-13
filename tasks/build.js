const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const { lstatSync, readdirSync } = require('fs');
const { join, resolve } = require('path');

gulp.task('build', () => {
    const packagesPath = resolve(__dirname, '..', 'packages');

    const isDirectory = source => lstatSync(source).isDirectory();
    const getDirectories = source => readdirSync(source)
        .map(name => join(source, name))
        .filter(isDirectory)
        .map(path => path.split('/').pop())
        .map(relativePath => `./packages/${relativePath}`);

    const packagePaths = getDirectories(packagesPath);

    packagePaths.forEach(path => {
        gulp.src(`${path}/index.js`)
            .pipe(babel())
            .pipe(uglify())
            .pipe(gulp.dest(`${path}/dist`))
    })
});