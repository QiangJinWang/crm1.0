const path = require('path');
const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
	  main:'./src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			'~': resolve(__dirname, 'src')
		},
		extensions: ['.js', '.vue', '.json', '.css']
	},
	devtool: 'inline-source-map'
};