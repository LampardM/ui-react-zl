const webpack = require('webpack');
const config = require('../build/webpack.config.dev');

function start() {
  console.log('start is begining')
  let compiler = webpack(config);

  compiler.run((err, stats) => {
    console.log(stats)
  })
}

start()