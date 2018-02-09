var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RQSchema = new Schema({
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

var RQ = mongoose.model('RQ', RQSchema)

module.exports = RQ
