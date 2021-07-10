var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  // generate source map
  devtool: 'source-map',


  entry: {
    CSGDemo: {
      import: './demos/CSGDemo.js',
      filename: './demos/CSGDemo.js',
    },
    CSGShinyDemo: {
      import: './demos/CSGShinyDemo.js',
      filename: './demos/CSGShinyDemo.js',
    },
    V2CSGToy: {
      import: './v2/csg-toy.js',
      filename: './v2/csg-toy.js',
    },
    V2App3: {
      import: './v2/app3.js',
      filename: './v2/app3.js',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./demos/CSGDemo.html",
      filename: "./demos/CSGDemo.html",
      chunks: ['CSGDemo']
    }),
    new HtmlWebpackPlugin({
      template: "./demos/CSGShinyDemo.html",
      filename: "./demos/CSGShinyDemo.html",
      chunks: ['CSGShinyDemo']
    }),
    new HtmlWebpackPlugin({
      template: "./demos/CSGStress.html",
      filename: "./demos/CSGStress.html",
    }),
    new HtmlWebpackPlugin({
      template: "./v2/index.html",
      filename: "./v2/index.html",
      chunks: [
        'V2CSGToy',
        'V2App3',
      ],
    }),
  ],
};
