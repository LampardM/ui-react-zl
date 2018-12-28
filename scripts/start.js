const webpack = require('webpack');
const config = require('../build/webpack.config.dev');

function build() {
  console.log('build is begining')
  let devconfig = webpack(config);

  devconfig.run()
}

build()