const webpack = require('webpack');
const config = require('../build/webpack.config.prod');

function build() {
  console.log('build is begining')
  let compiler = webpack(config);

  compiler.run((err, stats) => {
    console.log(stats, 'stats')
    console.log(err, 'err')
  })
}

build()