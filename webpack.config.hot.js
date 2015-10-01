require('babel/register');

const defaultConfig = require( './webpack.config.js' );
const webpack = require('webpack');

module.exports = Object.assign( {}, defaultConfig, {
	entry: {
		App: [
			'webpack-dev-server/client?http://localhost:4001/',
			'webpack/hot/only-dev-server',
			__dirname + '/index.jsx'
		]
	},
	output: {
		filename: 'index.min.js',
		path: __dirname + '/public',
		publicPath: 'http://localhost:4001/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ 'react-hot', 'babel-loader' ]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		})
	]
} );
