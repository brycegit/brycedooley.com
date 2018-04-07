const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const nameScheme = (type) => '[name].' + type;

module.exports = {
	mode: 'development', //process.env.NODE_ENV || 'development',
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        sideEffects: false,//[path.resolve(__dirname, '../src/Test.js')],
        exclude: /node_modules/,
        use: 'babel-loader'
      },
  //     {
  //  test: /\.html$/,
  //  loader: 'html-loader'
  // },
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
    ]
  },
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: process.cwd()
		})
	],
	output: {
  	chunkFilename: nameScheme('js'),
    filename: nameScheme('js'),
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    libraryTarget: 'umd',
  },
};
