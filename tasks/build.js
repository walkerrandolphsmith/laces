const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const webpack = require('webpack');
const { lstatSync, readdirSync } = require('fs');
const { join, resolve } = require('path');

const buildConfig = (buildTarget) => (packageName, entry, outputPath) => {
    return ({
        target: 'web',
        entry: entry,
        output: Object.assign(
            {},
            {
                path: outputPath,
                filename: 'index.js',
            },
            buildTarget(packageName)
        ),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: [/node_modules/]
                },
            ]
        },
        plugins: [
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

        ]
    });
};

const buildUniversalConfig = buildConfig((packageName) => ({
    library: packageName,
    libraryTarget: 'umd',
    libraryExport: 'default',
}));

const buildNodeConfig = buildConfig((packageName) => ({
    library: packageName,
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
}));

const packagesPath = resolve(__dirname, '..', 'packages');
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source => readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(path => path.split('/').pop())
    .map(relativePath => `./packages/${relativePath}`);

const packagePaths = getDirectories(packagesPath);

gulp.task('build', (callback) => {
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
        const entry = resolve(output, 'index.js');
        const config = buildUniversalConfig(packageName, entry, output);

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
