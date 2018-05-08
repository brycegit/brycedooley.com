const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const nameScheme = (type) => '[name].[chunkhash:5].' + type;

module.exports = {
	mode: process.env.NODE_ENV || 'development',
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
    // vendor: ['react', 'react-dom']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        sideEffects: false,//[path.resolve(__dirname, '../src/Test.js')],
        exclude: /node_modules/,
        use: 'babel-loader'
      },
			{
      	test: /\.css$/,
      	exclude: /node_modules/,
				use: [
          {
            loader: "css-loader",
            options: {
          		modules: true,
          		localIdentName: '[name]__[local]', //___[hash:base64:5]'
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
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    libraryTarget: 'umd',
  }
};
