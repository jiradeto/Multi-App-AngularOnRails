var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.config.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

var path = require('path');
var webpack = require('webpack');

// const {
// 	ADMIN_CONFIG
// } = require('./admin-app/webpack.config.js');
const {
	THEME_CONFIG
} = require('./theme/webpack.config.js');

var prodConfig = {
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
			mangle: {
				keep_fnames: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		}),
		new ExtractTextPlugin('[name].[hash].css'),
		new webpack.LoaderOptionsPlugin({
			htmlLoader: {
				minimize: false // workaround for ng2
			}
		})
	]
};

let targets = [THEME_CONFIG].map((target) => {
	let base = webpackMerge(target, prodConfig);
	return base;
});

module.exports = targets;