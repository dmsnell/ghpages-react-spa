var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: __dirname + '/index.jsx',
	output: {
		path: __dirname,
		filename: 'index.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin( { title: 'ghpages-react-spa' } )
	],
	resolve: {
		modulesDirectories: [ 'client', 'node_modules' ],
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'sourcemap'
};
