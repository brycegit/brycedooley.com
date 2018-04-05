const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const webpack = require('webpack');

const nameScheme = (type) => '[name].[hash:5].' + type;

module.exports = merge.strategy(
	{
		'module.rules': 'prepend',
		'module.plugins': 'append'
	}
)
(common, {
  devtool: 'source-map',
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				exclude: /node_modules/, 
				use: MiniCssExtractPlugin.loader
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
			chunkFilename: nameScheme('css')
    }),
		new HtmlCriticalPlugin({
			base: path.resolve(__dirname, '../dist'),
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
		}),
		new UglifyJSPlugin({
      sourceMap: true
    }),
    new OptimizeCssAssetsPlugin(),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer'
		})
	]
});