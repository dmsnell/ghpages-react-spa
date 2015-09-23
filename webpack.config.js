var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: __dirname + '/index.js',
	output: {
		path: __dirname,
		filename: 'index.min.js',
		hash: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'ghpages-react-spa'
	})],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'sourcemap'
};
