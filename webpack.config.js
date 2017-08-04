var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: ['./app/index.js','./app/test.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};