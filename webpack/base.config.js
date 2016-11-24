var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: "./src/index.jsx"
  },
  output: {
    path: './dist',
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //exclude: /node_modules/,
        include: path.join(__dirname, '../src'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        loaders: [ 'style', 'css', 'postcss' ]
      },
      {
        test: /\.scss$/,
        //exclude: /node_modules/,
        loaders: [ 'style', 'css', 'postcss', 'sass' ]
      },
      {
        test: /\.ttf$/,
        //exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        //exclude: /node_modules/,
        loader: 'url-loader?limit=1&progressive=true&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
  ],
  resolve: {
   extensions: ['', '.js', '.jsx', '.scss']
 },
 devtool: 'cheap-module-eval-source-map'
}
