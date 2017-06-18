const ejs = require('ejs')
const loaderUtils = require('loader-utils')
const uglify = require('uglify-js')


module.exports = function (source) {
  const options = loaderUtils.getOptions(this) || {};
  options['webpack'] = this
  var template = ejs.compile(source, {
    client: true,
    filename: '.',
    webpack: this
  });

  var ast = uglify.parser.parse(template.toString());

  return 'module.exports = ' + uglify.uglify.gen_code(ast, {beautify: true});
}
