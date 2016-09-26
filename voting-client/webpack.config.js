var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx' 
  ],

  module: {
    loaders: [
      
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },

      { 
        test: /\.css$/,
        include: __dirname + '/src',
        loader: ExtractTextPlugin.extract('style', 'css!postcss') 
      }
    ] 
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

    new ExtractTextPlugin('style.css'),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};


