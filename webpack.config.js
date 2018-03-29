const path = require('path');
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log(env)

const nameScheme = (type) => '[name].[hash:5].' + type;

const plugins = {
	development: [
		new webpack.NamedModulesPlugin(), 
		new webpack.HotModuleReplacementPlugin()
	],
	production: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
			chunkFilename: nameScheme('css')
    }),
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
	]
}

const loaders = {
	css: {
		production: [MiniCssExtractPlugin.loader],
		development: ['style-loader']
	}
}

module.exports = {
	mode: env,
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist',
  	hot: true
  },
  module: {
    rules: [
			{ 
      	test: /\.js$/, 
      	sideEffects: false,
      	exclude: /node_modules/, 
      	use: 'babel-loader' 
			},
			{ 
      	test: /\.css$/, 
      	exclude: /node_modules/, 
				use: [
          ...loaders.css[env],
          "css-loader"
        ]
			},
    ]
  },
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		}),
		...plugins[env]
	],
	output: {
  	chunkFilename: nameScheme('js'),
    filename: nameScheme('js'),
    path: path.resolve(__dirname, 'dist')
  },
};