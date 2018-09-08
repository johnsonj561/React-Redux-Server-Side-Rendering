const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config  = {
  // declare bundle as Node.js bundle
  target: 'node',
  // define root file of server app
  entry: './src/index.js',
  // where to put output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // prevent node_module file imports from
  // being added to output bundle
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
