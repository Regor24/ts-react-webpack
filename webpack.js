const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEVELOPMENT = process.env.DEVELOPMENT === 'true';
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  mode: IS_DEVELOPMENT ? 'development' : 'production',

  entry: './src/index.ts',

  output: {
    path: dist,
    publicPath: '/dist',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ]
  },

  watch: IS_DEVELOPMENT,

  devServer: {
    contentBase: dist,
    filename: 'bundle.js',
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};
