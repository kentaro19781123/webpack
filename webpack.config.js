const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    main: "./src/css/style.css",
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            'postcss-loader'
          ]
        }),
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3010,
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: './src/img',
      to: 'img',
    }]),
    new HtmlWebPackPlugin({
      template: "./src/page/index.pug",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/page/content/index.pug",
      filename: "./content/index.html"
    }),
    new FixStyleOnlyEntriesPlugin(),
    new ExtractTextPlugin({
      filename: "./css/[name].css"
    })
  ]
};
