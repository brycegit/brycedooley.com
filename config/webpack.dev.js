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
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         chunks: "initial",
  //         minChunks: 2,
  //         maxInitialRequests: 5, // The default limit is too small to showcase the effect
  //         minSize: 0 // This is example is too small to create commons chunks
  //       },
  //       vendor: {
  //         test: /node_modules/,
  //         chunks: "initial",
  //         name: "vendor",
  //         priority: 10,
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  output: {
    chunkFilename: nameScheme('js'),
    filename: nameScheme('js')
  }
});
