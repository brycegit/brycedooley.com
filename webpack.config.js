const path = require('path');

module.exports = {
  entry: './components/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
      	test: /\.css$/, 
      	use: [
      		'style-loader', 
      		{ 
      			loader: 'css-loader', 
      			options: { 
//       				importLoaders: 1, 
      				modules: true, 
      				localIdentName: '[name]__[local]___[hash:base64:5]'
						} 
					}
      	] 
			},
			{ 
      	test: /\.js$/, 
      	exclude: /node_modules/, 
      	use: 'babel-loader' 
			},
    ]
  }
};


