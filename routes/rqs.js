var express = require('express')
var router = express.Router()
var RQ = require('../schema/RQ')

router.get('/', function(req, res, next) {
  RQ.find({}, (err, rQs) => {
    if(err) throw err
    res.json(JSON.stringify(rQs))
  })
})

router.post('/', (req, res, next) => {
  var rQ = new RQ({
    value: req.body.value,
    date: req.body.date
  })

  rQ.save(err => {
    if(err) return res.json(err)
    res.json({ msg: 'rQ saved!'})
  })
})

module.exports = router
