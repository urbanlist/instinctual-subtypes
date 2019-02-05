const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isDevBuild = argv.mode == "development";

  return {
    mode: isDevBuild ? "development" : "production",
    entry: path.join(__dirname, './src/boot.tsx'),
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }, {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }, {
        test: /\.styl$/,
        use: isDevBuild ? ['style-loader', 'css-loader', 'stylus-loader'] : [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
      }, {
        test: /\.(gif|png|jpe?g|svg|ttf|mp3|ogg|wav)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/',
          outputPath: './'
        }
      }]
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        filename: "./index.html"
      }),
      new CleanWebpackPlugin(['dist']),
    ].concat(isDevBuild ? [
      new webpack.HotModuleReplacementPlugin()
    ] : [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]),
    devServer: {
      hot: true,
      contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')],
      compress: true,
      host: '0.0.0.0',
      port: 8080,
      historyApiFallback: {
        rewrites: [{
          from: /(\w+|\/)/,
          to: './index.html'
        }, ]
      },
    },
  }
};