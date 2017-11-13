const gulp = require('gulp');
const { readFileSync, writeFileSync, readdirSync } = require('fs');
const { join, resolve } = require('path');
const mkdirp = require('mkdirp');

gulp.task('create', function() {
    const packagesPath = resolve(__dirname, '..', 'packages');
    const templatesPath = resolve(__dirname, 'templates');
    const newPackageName = process.argv[4];

    if(!newPackageName) {
        console.log('Must provide a package to create. Try the following:');
        console.log('npm run create --name <package-name>');
    }

    const packagePath = `${packagesPath}/${newPackageName}`;

    const onCreation = error => {
        if(error) {
            console.log('An error occurred trying to create your package');
            console.log(error);
            return;
        }

        readdirSync(templatesPath)
            .forEach(filename => {
                const filepath = join(packagePath, filename);
                let contents = readFileSync(`${templatesPath}/${filename}`, 'utf-8');
                contents = contents.replace(/XXXXXXXX/g, newPackageName);
                writeFileSync(filepath, contents)
            });
    };

    mkdirp(packagePath, onCreation);
});


