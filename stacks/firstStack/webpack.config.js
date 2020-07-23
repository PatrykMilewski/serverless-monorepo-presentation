const path = require('path');
const slsw = require('serverless-webpack');
const SizePlugin = require('size-plugin');

module.exports = {
	entry: slsw.lib.entries,
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	target: 'node',
	optimization: {
		minimize: false,
	},
	devtool: 'source-map',
	externals: [{'aws-sdk': 'commonjs aws-sdk'}],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						}
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.js'],
	},
	output: {
		libraryTarget: 'commonjs2',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
	plugins: [
		new SizePlugin()
	]
};