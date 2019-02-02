const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'].concat(isDevBuild ? [] : ['postcss-loader'])
      }, {
        test: /\.styl$/,
        use: isDevBuild ? 
          ['style-loader', 'css-loader', 'stylus-loader'] : 
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'stylus-loader', 'postcss-loader']
          })
      }, {
        test: /\.(gif|png|jpe?g|svg|ttf|mp3|ogg|wav)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/',
          outputPath: isDevBuild ? './' : '../'
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
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        filename: "./index.html"
      }),
    ].concat(isDevBuild ? [
      new webpack.HotModuleReplacementPlugin()
    ] : [
      new webpack
      .optimize
      .UglifyJsPlugin(),
      new ExtractTextPlugin('app.css')
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
          to: path.join(__dirname, './index.html')
        }, ]
      },
    },
  }
};