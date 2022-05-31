const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  // module: {
  //   rules: [
  //     {
  //       loader: 'babel-loader',
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       options: {
  //         presets: ['@babel/preset-env'],
  //       },
  //     },
  //   ],
  // },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'cheap-module-source-map',

  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
