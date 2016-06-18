const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const Express = require('express')

const app = new Express()
const port = 3000 || process.env.PORT
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.use((req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})
app.listen(port, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
