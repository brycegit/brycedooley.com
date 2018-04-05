const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const TestPlugin = require('./TestPlugin');

const nameScheme = (type) => '[name].[hash:5].' + type;

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
		new TestPlugin()
	]
});