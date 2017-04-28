const path = require('path');

const {
  CheckerPlugin
} = require("awesome-typescript-loader")
const {
  CommonsChunkPlugin
} = require("webpack").optimize;

var AssetsPlugin = require('assets-webpack-plugin');

const WEB_CONFIG = {

  devtool: "source-map",
  resolve: {
    "extensions": ['.ts', '.tsx', '.js', '.jsx']
  },
  resolveLoader: {
    "modules": [path.join(__dirname, "node_modules/")]
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
          query: {
            configFileName: path.join(__dirname, "tsconfig.json")
          }
        }, 'angular2-template-loader']
      }, {
        "test": /\.html$/,
        "loader": "raw-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loaders: ['file-loader?name=assets/[name].[hash].[ext]']
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
  plugins: [
    new CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new AssetsPlugin({
      path: __dirname
    })
  ],
  output: {
    path: path.join(__dirname, "../public", "wassets/web/"),
    filename: '[name]_[hash].bundle.js',
    sourceMapFilename: '[name]_[hash].map',
    chunkFilename: '[id].chunk.js',
    publicPath: "wassets/web/"
  }
}

module.exports = {
  WEB_CONFIG
}