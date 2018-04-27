const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nameScheme = (type) => '[name].' + type;

module.exports = merge.strategy(
	{
		'module.rules': 'prepend',
		'module.plugins': 'append'
	}
)
(common, {
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader']
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
  output: {
    chunkFilename: nameScheme('js'),
    filename: nameScheme('js')
  }
});
