const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

const {
  NoEmitOnErrorsPlugin
} = require('webpack');
const {
  CommonsChunkPlugin
} = require('webpack').optimize;


const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];
const minimizeCss = false;
const baseHref = "";
const deployUrl = "";


const THEME_CONFIG = {
  "devtool": "source-map",
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "./node_modules"
    ]
  },
  resolveLoader: {
    "modules": [path.join(__dirname, "node_modules/")]
  },
  "entry": {
    "vendor": [
      path.join(__dirname, "src/vendor.ts")
    ],
    "main": [
      path.join(__dirname, "src/main.ts")
    ],
    "polyfills": [
      path.join(__dirname, "src/polyfills.ts")
    ],
    "styles": [
      path.join(__dirname, "src/styles.scss")
    ]
  },
  output: {
    path: path.join(__dirname, "../public", "wassets/theme/"),
    filename: '[name]_[hash].bundle.js',
    sourceMapFilename: '[name]_[hash].map',
    chunkFilename: '[id].chunk.js',
    publicPath: "wassets/theme/"
  },
  "module": {
    "rules": [{
        "enforce": "pre",
        "test": /\.js$/,
        "loader": "source-map-loader",
        "exclude": [
          /\/node_modules\//
        ]
      },
      {
        "test": /\.json$/,
        "loader": "json-loader"
      },
      {
        "test": /\.html$/,
        "loader": "raw-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loaders: ['file-loader']
      },
      {
        "include": [
          path.join(__dirname, "src/styles.scss")
        ],
        "test": /\.css$/,
        "loaders": ExtractTextPlugin.extract({
          "use": [{
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "importLoaders": 1
              }
            }

          ],
          "fallback": "style-loader",
          "publicPath": ""
        })
      },
      {
        "exclude": [
          path.join(__dirname, "src/styles.scss")
        ],
        "test": /\.css$/,
        "use": [
          "exports-loader?module.exports.toString()",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "importLoaders": 1
            }
          }
        ]
      },
      {
        "exclude": [
          path.join(__dirname, "src/styles.scss")
        ],
        "test": /\.scss$|\.sass$/,
        "use": [
          "exports-loader?module.exports.toString()",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "importLoaders": 1
            }
          },
          {
            "loader": "sass-loader",
            "options": {
              "sourceMap": false,
              "precision": 8,
              "includePaths": []
            }
          }
        ]
      },
      {
        "include": [
          path.join(__dirname, "src/styles.scss")
        ],
        "test": /\.scss$|\.sass$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test: /\.ts$/,
        use: [{
            loader: '@angularclass/hmr-loader'
          },
          { // MAKE SURE TO CHAIN VANILLA JS CODE, I.E. TS COMPILATION OUTPUT.
            loader: 'ng-router-loader',
            options: {
              loader: 'async-import',
              genDir: 'compiled'

            }
          },
          {
            loader: 'awesome-typescript-loader',
            query: {
              configFileName: path.join(__dirname, "tsconfig.json")
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      }

    ]
  },
  "plugins": [
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether"
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, "src/assets"),
      to: 'assets'
    }]),
    new AssetsPlugin({
      path: __dirname
    }),
    new NoEmitOnErrorsPlugin(),
    new ProgressPlugin(),
    new CommonsChunkPlugin({
      name: 'polyfills',
      chunks: ['polyfills']
    }),
    // This enables tree shaking of the vendor modules
    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: module => module.resource && module.resource.startsWith(nodeModules),
    }),


    new ExtractTextPlugin({
      "filename": "[name].bundle.css",
      "disable": true
    })
  ],
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  },
  "devServer": {
    "historyApiFallback": true
  }
};



module.exports = {
  THEME_CONFIG
}
