const webpack = require('webpack');
const config = require('../build/webpack.config.prod');

function build() {
  console.log('build is begining')
  let compiler = webpack(config);

  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));

  })
}

build()