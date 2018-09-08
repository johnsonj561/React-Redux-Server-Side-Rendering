module.exports = {
    // run babel on all js files
  // ignore node modules and use presets
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'es2015',
            'stage-0',
            ['env', { targets: { browsers: [ 'last 2 versions'] }}]
          ],
          plugins: [
            'transform-class-properties'
          ]
        }
      }
    ]
  }
}