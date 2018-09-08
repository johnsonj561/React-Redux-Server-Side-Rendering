const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config  = {
  // define root file of client app
  entry: './src/client/client.js',
  // where to put output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);
