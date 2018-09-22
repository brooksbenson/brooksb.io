const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {
  entry: ['babel-polyfill', './client'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtract.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtract({
      filename: 'styles.css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    publicPath: '/dist/'
  }
};
