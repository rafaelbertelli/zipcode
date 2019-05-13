const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'src', 'index')],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    hot: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({ path: path.resolve(__dirname, '.env'), systemvars: true, silent: false }),
    new HtmlWebpackPlugin({ template: path.resolve(path.join(__dirname, 'src', '/index.html')) }),
    new webpack.EnvironmentPlugin(['MAPS_KEY', 'GEOCODE_KEY']),
  ],

  resolve: {
    alias: {
      '@containers': path.resolve(__dirname, 'src', 'containers'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@services': path.resolve(__dirname, 'src', 'services'),
    },
    extensions: ['.js'],
  },
};
