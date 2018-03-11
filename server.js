var mongoose = require('mongoose'),
  express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  rQs = require('./controllers/rqs'),
  users = require('./controllers/users'),
  sessions = require('./controllers/sessions'),
  app = express(),
  mongoDB = 'mongodb://127.0.0.1/rq'

mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/rqs', rQs)
app.use('/api/users', users)
app.use('/api/sessions', sessions)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
