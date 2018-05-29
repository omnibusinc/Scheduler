const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
}

module.exports = {
  entry: ['babel-polyfill', path.join(paths.SRC, 'app.js')],
  output: {
    filename: 'bundle.js',
    path: paths.DIST
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080
  },
  mode: 'development',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};