# ejs-parser-loader for webpack #

ejs-parser-loader is a loader for webpack to parse ejs template

## Installation ##

Install the plugin with npm:
```
$ npm install ejs-parser-loader --save-dev
```

## usage ##

```javascript
//webpack config
rules: [{
    test: /\.ejs$/,
    loader: 'ejs-parser-loader',
    options: { //options will be pass into ejs.compiled function
    }
  }]
```