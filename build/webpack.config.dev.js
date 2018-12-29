const merge = require('webpack-merge');
const config = require('./webpack.config.base.js');
const paths = require('./paths');

module.exports = merge(config, {
    mode: 'development',

    devServer: {
      contentBase: paths.appBuild,
      compress: true,
      port: 8080
    }
  }
)