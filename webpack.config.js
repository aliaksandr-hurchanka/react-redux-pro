var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var bootstrapPath = path.join(
    __dirname,
    'development/bower_components/bootstrap/dist/css'
);

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()
  ],
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loaders: ['eslint'],
    //     include: [
    //       path.resolve(__dirname, "src"),
    //     ],
    //   }
    // ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {test: /\.css$/, loaders: 'style-loader!css-loader' , exclude: /node_modules/},
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {test: /\.html$/, loader: 'raw',exclude: /node_modules/},
      {test: /^((?!config).)*\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file', exclude: /node_modules/}
    ]
  }
}
