const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nameScheme = (type) => '[name].[hash:5].' + type;

module.exports = {
	mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
			{ 
      	test: /\.css$/, 
      	exclude: /node_modules/, 
				use: [
          {
          	loader: "css-loader",
          	options: {
          		modules: true,
          		localIdentName: '[name]__[local]___[hash:base64:5]'
          	}
					},
					{
						loader: "postcss-loader",
						options: {
    					plugins: () => [require('autoprefixer')]
  					}
					}
        ]
			},
						{ 
      	test: /\.js$/, 
      	sideEffects: true,//[path.resolve(__dirname, '../src/Test.js')],
      	exclude: /node_modules/, 
      	use: 'babel-loader' 
			},
    ]
  },
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: process.cwd()
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
			hash: true,
			cache: false
		})
	],
	output: {
  	chunkFilename: nameScheme('js'),
    filename: nameScheme('js'),
    path: path.resolve(__dirname, '../dist')
  },
};