const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const devMode = !argv.hasOwnProperty('mode') ? true : argv.mode !== 'production'

  return {
    mode: 'development',
    entry: {
      'main': './lib/App.tsx'
    },
    output: {
      filename: 'task-stars-[hash].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd'
    },
    optimization: {
      sideEffects: false,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: 'task-stars.css',
        chunkFilename: 'task-stars.css'
      }),
      new CheckerPlugin(),
      new HtmlWebPackPlugin({
        template: "./lib/index.html",
        filename: "./index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                sourceMap: devMode
              }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: devMode
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: devMode,
                plugins: function () {
                  return [
                    require('autoprefixer')({ grid: true, browsers: ['>1%'] })
                  ]
                }
              }
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
                publicPath: './fonts'
              }
            }
          ]
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
                publicPath: './images'
              }
            }
          ]
        },
        {
          test: /\.m?tsx?$/,
          include: [
            fs.realpathSync(
              path.resolve(
                path.join(
                  __dirname,
                  './lib'
                )
              )
            )
          ],
          use: {
            loader: 'awesome-typescript-loader'
          }
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader'
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9002
    },
    devtool: devMode ? 'source-map' : false,
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  }
}
