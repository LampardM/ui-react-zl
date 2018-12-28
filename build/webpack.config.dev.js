const merge = require('webpack-merge');
const config = require('./webpack.config.base.js');
const paths = require('./paths');

module.exports = merge(config, {
    mode: 'development'
  }
)