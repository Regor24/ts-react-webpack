const webpack = require('webpack');
const path = require('path');

const IS_DEVELOPMENT = process.env.DEVELOPMENT === 'true';
const dist = path.resolve(__dirname, './dist/');

module.exports = {
  mode: IS_DEVELOPMENT ? 'development' : 'production',

  entry: './src/index.tsx',

  output: {
    path: dist,
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

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
