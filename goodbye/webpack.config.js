var config = {
  module: {},
};
const path = require('path');
const {
  CheckerPlugin
} = require('awesome-typescript-loader')
const {
  CommonsChunkPlugin
} = require('webpack').optimize;

var AssetsPlugin = require('assets-webpack-plugin');

const GOODBYE_CONFIG = Object.assign({}, config, {
  "devtool": "source-map",
  "resolve": {
    "extensions": ['.ts', '.tsx', '.js', '.jsx']
  },
  "entry": {
    "main": [
      path.join(__dirname, "src/main.ts")
    ],
    "polyfills": [
      path.join(__dirname, "src/polyfills.ts")
    ],
    "vendor": [
      path.join(__dirname, "src/vendor.ts")
    ],
  },
  "module": {
    "rules": [{
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: './tsconfig.json'
          }
        }, 'angular2-template-loader']
      }, {
        "test": /\.html$/,
        "loader": "raw-loader"
      },
      {
        "test": /\.css$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader"
        ]
      }

    ]
  },
  "plugins": [
    new CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new CheckerPlugin(),
    new AssetsPlugin({
      path: './goodbye'
    })
  ],
  output: {
    path: path.join(__dirname, "../public", "wassets/goodbye/"),
    filename: '[name]_[hash].bundle.js',
    sourceMapFilename: '[name]_[hash].map',
    chunkFilename: '[id].chunk.js',
    publicPath: "wassets/goodbye/"
  }
});

module.exports = {
  GOODBYE_CONFIG
}