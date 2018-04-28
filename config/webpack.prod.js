const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');

const nameScheme = (type) => '[name].[chunkhash:5].' + type;
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
            test: /components/,
            name: "commons",
            chunks: "all",
            minChunks: 2,
            priority: 1,
            minSize: 10
        },
        vendor: {
          test: /node_modules/,
          chunks: "all",
          name: "vendor",
          minChunks: 2,
          priority: 2,
          minSize: 10
        }
      }
    },
    // runtimeChunk: 'single'
  },
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:5].css',
			chunkFilename: '[name].[contenthash:5].css'
    }),
    // new StaticSiteGeneratorPlugin({
    //   paths: [
    //     '/',
    //     '/hello'
    //   ],
    //   // crawl: true,
    //   globals: {
    //     window: {}
    //   },
    //   entry: ['app', 'vendor'],
    //   locals: {
    //     // Properties here are merged into `locals`
    //     // passed to the exported render function
    //     greet: 'Hello'
    //   }
    // }),
    new HtmlCriticalPlugin({
      base: path.resolve(__dirname, '../dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: false,
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
    // new webpack.HashedModuleIdsPlugin(),
		// new ScriptExtHtmlWebpackPlugin({
		// 	defaultAttribute: 'defer'
		// })
	],
  output: {
    chunkFilename: nameScheme('js'),
    filename: nameScheme('js')
  }
});
