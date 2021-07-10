var path = require('path');

module.exports = {
  //...
  entry: './demos/CSGDemo.js',
  devServer: {
    contentBase: path.join(__dirname, '.'),
    compress: true,
    port: 9000,
  },
};
