const webpack = require('webpack');
const config = require('../build/webpack.config.dev');
const WebpackDevServer = require('webpack-dev-server');
const { port } = config.devServer

function start() {
  return new Promise((reslove, reject) => {
    console.log('start is begining')
    let compiler = webpack(config);
    
    const webpackServer = new WebpackDevServer(compiler)
  
    webpackServer.listen(port, "localhost", () => {
      console.log('server on localhost:'+ port +'')
      reslove()
    })
  })

}

start().then(() => {})