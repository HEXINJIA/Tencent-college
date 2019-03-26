var express = require('express')
var compression = require('compression')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT || config.build.port

var app = express()

app.use(express.static('./dist'))

module.exports = app.listen(8089, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + 8089 + '\n')
})
