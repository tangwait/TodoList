const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const { supportedLocales } = require('./config.js'); 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tangwait's Todo List", 
    }),
    new webpack.ContextReplacementPlugin(
      /date-fns[/\\]locale/,
      new RegExp(`\\.[/\\\\](${supportedLocales.join('|')})[/\\\\]index\\.js$`)
    ),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
