const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'dist/js/midnight-messenger.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './manifest.json', to: 'dist/manifest.json' },
      { from: './icon*.png', to: 'dist' },
    ]),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.es6'],
  },
};
