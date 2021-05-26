 var webpack = require('webpack');


module.exports = {
  entry: './app.js',
  output: {
    filename: './bundle.js',
    library: 'myApp'
  },
  module:{
  	rules:[
  	{
  		 test: /\.css$/,
  		use: [
    		'style-loader',
    		'css-loader'
  		]
  	}
  	]
  }
};