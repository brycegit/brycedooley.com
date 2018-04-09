const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TestPlugin = require('./TestPlugin');

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
  	hot: true
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
		new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
    	template: path.resolve(__dirname, 'index.html'),
    	hash: true,
    	cache: false
    })
	],
  output: {
    chunkFilename: nameScheme('js'),
    filename: nameScheme('js')
  }
});
