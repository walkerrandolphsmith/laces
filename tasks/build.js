const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const zip = require('gulp-zip');
const mkdirp = require('mkdirp');
const webpack = require('webpack');
const { join, resolve } = require('path');
const {
    lstatSync,
    readdirSync,
    writeFileSync,
    readFileSync
} = require('fs');

const rules = [
    {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
    },
];

const plugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),

    new webpack.optimize.UglifyJsPlugin({
        minimize : true,
        compress : {
            warnings : false
        }
    }),
];

const buildNodeConfig = (packageName, entry, outputPath) => ({
    target: 'node',
    entry: entry,
    output: {
        path: outputPath,
        filename: 'index.js',
        library: packageName,
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
    },
    module: {
        rules: rules
    },
    plugins: plugins
});

const buildUniversalConfig = (packageName, entry, outputPath) => ({
    target: 'web',
    entry: entry,
    output: {
        path: outputPath,
        filename: 'browser.js',
        library: packageName,
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    module: {
        rules: rules
    },
    plugins: plugins
});

const packagesPath = resolve(__dirname, '..', 'packages');
const isDirectory = source => lstatSync(source).isDirectory();
const getPackages = source => readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(path => path.split('/').pop());

const packages = getPackages(packagesPath);
const packagePaths = packages.map(relativePath => `./packages/${relativePath}`);

gulp.task('build', ['build:npm', 'build:browser']);

gulp.task('build:npm', (callback) => {
    packagePaths.forEach(path => {
        const packageName = path.split('packages/')[1];
        const output = resolve(__dirname, '..', path, 'dist');
        const entry = resolve(__dirname, '..', path, 'index.js');

        const config = buildNodeConfig(packageName, entry, output);

        webpack(config, function(err, stats) {
            if (err) throw new gutil.PluginError('webpack', err);
            gutil.log('[webpack]', stats.toString({
                colors: true,
                progress: true
            }));
        });
    });
    callback();
});

gulp.task('build:browser', (callback) => {
    packagePaths.forEach(path => {
        const packageName = path.split('packages/')[1];
        const output = resolve(__dirname, '..', `${path}/dist`);
        const entry = resolve(__dirname, '..', path, 'index.js');
        const config = buildUniversalConfig(packageName, entry, output);

        webpack(config, function(err, stats) {
            if (err) throw new gutil.PluginError('webpack', err);
            gutil.log('[webpack]', stats.toString({
                colors: true,
                progress: true,
            }));
        });
    });
    callback();
});

gulp.task('build:npm:archive', ['build:npm'], () => {
    mkdirp('./dist/npm');

    packages.map(packageName => {
        writeFileSync(
            resolve(__dirname, '..', 'dist', 'npm', `${packageName}.js`),
            readFileSync(
                resolve(__dirname, '..', 'packages', packageName, 'dist', 'index.js')
            ),
        )
    })
});

gulp.task('build:browser:archive', ['build:browser'], () => {
    mkdirp('./dist/browser');

    packages.map(packageName => {
        writeFileSync(
            resolve(__dirname, '..', 'dist', 'browser', `${packageName}.js`),
            readFileSync(
                resolve(__dirname, '..', 'packages', packageName, 'dist', 'browser.js')
            ),
        )
    })
});

gulp.task('package', ['package:npm', 'package:browser', 'package:source']);

gulp.task('package:npm', ['build:npm:archive'], () => {
    gulp.src('dist/npm/*', { base: './dist/' })
        .pipe(zip('archive.node.zip'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('package:browser', ['build:browser:archive'], () => {
    gulp.src('dist/browser/*', { base: './dist/' })
        .pipe(zip('archive.browser.zip'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('package:source', () => {
    gulp.src('packages/*', { base: './packages/' })
        .pipe(zip('source.zip'))
        .pipe(gulp.dest('./dist'))
});