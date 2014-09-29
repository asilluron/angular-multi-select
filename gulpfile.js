var gulp = require('gulp');
var angularTemplates = require('gulp-angular-templates');
var concat = require('gulp-concat');
var header = require('gulp-header');
var fs = require('fs');
var pkg = require('./package.json');

var licenseText = fs.readFileSync('LICENSE.txt', 'utf8');

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' * <%= licenseText %>',
  ' */',
  ''].join('\n');


gulp.task('deploy', function() {
    gulp.src(['./dist/templates/multiselect.html.js', './src/multiselect.js'])
        .pipe(concat('ng-multiselect.js'))
        .pipe(header(banner, { pkg : pkg, licenseText: licenseText} ))
        .pipe(gulp.dest('./dist/'));

});

gulp.task('templates', function() {
    return gulp.src('templates/**/*.html')
        .pipe(angularTemplates({
            module: "multiSelect.templates"
        }))
        .pipe(gulp.dest('./dist/templates'));

});
