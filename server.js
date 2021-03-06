var mongoose = require('mongoose'),
  express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  app = express(),
  appRouter = require('./routers/app-router'),
  mongoDB = 'mongodb://127.0.0.1/rq'

mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

appRouter.draw(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ msg: err.message })
})

module.exports = app
