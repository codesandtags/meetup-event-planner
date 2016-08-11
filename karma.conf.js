// karma.conf.js
module.exports = function(config) {
  var gulpconfig = require('gulp.config');

  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    //...
  });
};
