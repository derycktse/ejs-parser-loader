const ejs = require('ejs')
const loaderUtils = require('loader-utils')


module.exports = function (source) {
  const options = loaderUtils.getOptions(this) || {};

  let config = Object.assign({}, options, {
    client: true, webpack: this, filename: this.resourcePath
  })
  var template = ejs.compile(source, config)

  return 'module.exports = ' + template.toString()
}
