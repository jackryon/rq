var express = require('express'),
  router = express.Router(),
  RQ = require('../models/rq')

router.delete('/:id', function(req, res, next){
  RQ.remove({ _id: req.params.id }, function(err) {
    if(err) throw err
    res.json({ msg: 'rq deleted' })
  })
})

router.get('/', function(req, res, next){
  RQ.find({}, null, { sort: 'date' }, (err, rqs) => {
    if(err) throw err
    res.json(rqs)
  })
})

router.post('/', (req, res, next) => {
  var rq = new RQ({
    value: req.body.value,
    date: req.body.date
  })

  rq.save(err => {
    if(err) return res.json(err)
    res.json({ msg: 'rq saved!'})
  })
})

module.exports = router
