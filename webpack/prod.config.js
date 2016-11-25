var webpack = require('webpack');
var baseConfig = require('./base.config.js');

const prodConfig = Object.assign({}, baseConfig, {
  output: {
    path: 'dist/',
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: baseConfig.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
  ])
});

module.exports = prodConfig;