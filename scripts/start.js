const webpack = require('webpack');
const config = require('../build/webpack.config.dev');

function start() {
  console.log('build is begining')
  let compiler = webpack(config);

  compiler.run()
}

start()