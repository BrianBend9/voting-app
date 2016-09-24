var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx' 
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader' 
    }] 
  },

  resolve: {
    extensions: ['', '.js', '.jsx'] 
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js' 
  },

  devServer: {
    contentBase: './dist', 
    hot: true
  },

  postcss: function() {
    return [ autoprefixer({ browsers: ['last 2 versions'] }) ]; 
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};


