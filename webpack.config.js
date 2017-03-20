const path = require('path');

module.exports = {
  entry: {
    app: './sum'
  },
  output: {
    path: path.join(__dirname, './bundle'),
    filename: '[name].bundle.js'
  },
  // module: {
  //   rules: [{
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     loaders: [
  //       {
  //         loader: 'babel-loader'
  //       },
  //       // 'eslint-loader'
  //     ]
  //   }]
  // }
};
