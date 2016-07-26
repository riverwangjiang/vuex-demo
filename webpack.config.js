var webpack = require('webpack');
module.exports = {
  entry: './src/main.js',
  output: {
    path: './assets/',
    publicPath: '/assets/',
    filename: 'main.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015','stage-2'],
          plugins:['transform-runtime']
        }
      }
    ]
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins:['transform-runtime']
  },
  devServer: {
      historyApiFallback: true,
      hot: false,
      inline: true,
      grogress: true
  }
  //devtool: '#eval-source-map'
}