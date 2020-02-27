const path = require('path')
const webpack = require('webpack')
const globule = require('globule')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

const rootPath = path.resolve(__dirname, '../')
const hostPath = require('./host.path')

let buildEnv
if (process.env.NODE_ENV === 'production') {
  buildEnv = 'prod'
} else if(process.env.NODE_ENV === 'stage') {
  buildEnv = 'stage'
} else {
  buildEnv = 'local'
}

const targetTypes = { pug : 'html'}

const entriesList = {};
const getEntriesList = () => {
  for(const [ srcType, targetType ] of Object.entries(targetTypes)) {
    const filesMatched = globule.find([`**/*.${srcType}`, `!**/_*.${srcType}`], { cwd : `${rootPath}/src` });

    for(const srcName of filesMatched) {
      const targetPathName = srcName.replace(new RegExp(`.${srcType}$`, 'i'), `.${targetType}`);
      const targetName = targetPathName.replace('page/', '');
      entriesList[targetName] = `${rootPath}/src/${srcName}`;
    }
  }
  return entriesList;
}

const config = {
  entry: {
    index: './src/js/index.js',
    main: './src/css/style.css'
  },
  output: {
    filename: 'js/[name].js',
    publicPath: hostPath.host[buildEnv],
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './config/.eslintrc.json'
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './config/.babelrc'
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './config/'
              }
            }
          }
          // 'postcss-loader'
        ],
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
      to: 'img'
    }]),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?v=[hash]'
    }),
    new webpack.DefinePlugin({
      'HOST_PATH': JSON.stringify(hostPath.host[buildEnv]),
      'API_PATH': JSON.stringify(hostPath.api[buildEnv])
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
}

for(const [ targetName, srcName ] of Object.entries(getEntriesList())) {
  config.plugins.push(new HtmlWebPackPlugin({
    filename : targetName,
    template : srcName,
    hash: true
  }));
}

module.exports = config
