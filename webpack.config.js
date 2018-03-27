const path = require('path');
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
			{ 
      	test: /\.js$/, 
      	exclude: /node_modules/, 
      	use: 'babel-loader' 
			},
      { 
      	test: /\.css$/, 
      	use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
			},
    ]
  },
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		}),
		new ExtractTextPlugin("styles.css"),
		new HtmlCriticalPlugin({
			base: path.resolve(__dirname, 'dist'),
			src: 'index.html',
			dest: 'index.html',
			inline: true,
			minify: true,
			extract: true,
			width: 375,
			height: 565,
			penthouse: {
				blockJSRequests: false,
			}
		})
	],
};